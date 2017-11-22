DOCKER_GROUP = 'cwds'
DOCKER_IMAGE = 'casemanagement'
DOCKER_REGISTRY_CREDENTIALS_ID = '6ba8d05c-ca13-4818-8329-15d41a089ec0'
DOCKER_CONTAINER_NAME = 'cm-latest'
SLACK_CHANNEL = '#casemanagement-stream'
SLACK_CREDENTIALS_ID = 'slackmessagetpt2'

def notify(String status) {
    status = status ?: 'SUCCESS'
    def colorCode = status == 'SUCCESS' ? '#00FF00' : '#FF0000'
    def summary = """*${status}*: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':\nMore detail in console output at <${env.BUILD_URL}|${env.BUILD_URL}>"""
    slackSend(
        channel: SLACK_CHANNEL,
        baseUrl: 'https://hooks.slack.com/services/',
        tokenCredentialId: SLACK_CREDENTIALS_ID,
        color: colorCode,
        message: summary
    )
}

node('cm-slave') {
    def app
    try {
        stage('Checkout') {
            checkout scm
        }
        stage('Build Docker Image') {
            app = docker.build("${DOCKER_GROUP}/${DOCKER_IMAGE}:${env.BUILD_ID}")
        }
        app.withRun("--env CI=true") { container ->
            stage('Lint') {
                sh "docker exec -t ${container.id} yarn lint"
                sh "docker exec -t ${container.id} bundle exec rubocop"
            }
            stage('Unit Test') {
                sh "docker exec -t ${container.id} bundle exec rspec"
                sh "docker exec -t ${container.id} yarn run test"
            }
        }
        stage('Publish Image') {
            withDockerRegistry([credentialsId: DOCKER_REGISTRY_CREDENTIALS_ID]) {
                app.push()
                app.push('latest')
            }
        }
        stage('Deploy') {
            sh "docker ps --all --quiet --filter \"name=cm-latest\" | xargs docker stop"
            sh "docker ps --all --quiet --filter \"name=cm-latest\" | xargs docker rm"
            withDockerRegistry([credentialsId: DOCKER_REGISTRY_CREDENTIALS_ID]) {
                sh "docker pull ${DOCKER_GROUP}/${DOCKER_IMAGE}"
                sh "docker run --detach --publish 80:3000 --name ${DOCKER_CONTAINER_NAME} --env APP_NAME=casemanagement --env RAILS_ENV=test ${DOCKER_GROUP}/${DOCKER_IMAGE}"
            }
        }
        stage('Clean Up') {
            sh "docker images ${DOCKER_GROUP}/${DOCKER_IMAGE} --filter \"before=${DOCKER_GROUP}/${DOCKER_IMAGE}:${env.BUILD_ID}\" -q | xargs docker rmi || true"
        }
    } catch(Exception e) {
       currentBuild.result = "FAILURE"
       throw e
    } finally {
        notify(currentBuild.result)
        cleanWs()
    }
}
