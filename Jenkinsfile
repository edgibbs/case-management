def notifyBuild(String buildStatus, Exception e) {
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = """*${buildStatus}*: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':\nMore detail in console output at <${env.BUILD_URL}|${env.BUILD_URL}>"""
  def details = """${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':\n
    Check console output at ${env.BUILD_URL} """
  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    color = 'YELLOW'
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESSFUL') {
    color = 'GREEN'
    colorCode = '#00FF00'
  } else {
    color = 'RED'
    colorCode = '#FF0000'
    details +="<p>Error message ${e.message}, stacktrace: ${e}</p>"
    summary +="\nError message ${e.message}, stacktrace: ${e}"
  }

  // Send notifications

  slackSend channel: "#casemanagement-stream", baseUrl: 'https://hooks.slack.com/services/', tokenCredentialId: 'slackmessagetpt2', color: colorCode, message: summary
  emailext(
      subject: subject,
      body: details,
      attachLog: true,
      recipientProviders: [[$class: 'DevelopersRecipientProvider']],
      to: "ramu.kammagani@osi.ca.gov"
    )
}

node('cm-slave') {
    def app
    try {
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

         app = docker.build("cwds/casemanagement")
    }

    stage('Lint') {
      app.inside {
        sh 'yarn run lint'
      }
    }

    stage('Smoke test') {
        /* We test our image with a simple smoke test:
         * Run a curl inside the newly-build Docker image */

         app.inside {
            sh 'bundle exec rspec'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */

        withDockerRegistry([credentialsId: '6ba8d05c-ca13-4818-8329-15d41a089ec0']) {
            app.push('latest')
        }
    }
    stage('Run application') {

        sh 'docker stop casemanagement-test || exit 0; docker rm casemanagement-test || exit 0'
        withDockerRegistry([credentialsId: '6ba8d05c-ca13-4818-8329-15d41a089ec0']) {
          sh 'docker pull cwds/casemanagement '
          sh 'docker run -d -p 8888:3000 --name casemanagement-test -e APP_NAME=casemanagement cwds/casemanagement'
        }
    }

    } catch (Exception e)    {
       errorcode = e
       currentBuild.result = "FAIL"
       notifyBuild(currentBuild.result,errorcode)
       throw e;
    }finally {
       cleanWs()
 }
}



