pipeline {
    agent any
    triggers {
        bitbucketPush()
    }
    stages {
        stage("Trigger Bitbucket") {
            steps {
              echo "Trigger Bitbucket"
            }
        }
    }
}