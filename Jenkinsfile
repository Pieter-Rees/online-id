pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Installing..'
                npm install
            }
        }
        stage('Build') {
            steps {
                npm run build
            }
        }
        stage('Deploy') {
            agent any
            steps {
                sshPublisher(
                continueOnError: false, 
                failOnError: true,
                publishers: [
                    sshPublisherDesc(
                    configName: "pieterrees.nl",
                    transfers: [sshTransfer(sourceFiles: 'my-app.jar')],
                    verbose: true
                    )
                ]
                )
            }
        }   
    }
}   