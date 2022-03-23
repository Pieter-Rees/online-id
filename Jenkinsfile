pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Install') {
            steps {
                echo 'Installing..'
                sh 'npm install'
            }
        }   
        stage('Build') {
            steps {
                sh 'npm run build'

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
                    transfers: [sshTransfer(sourceFiles: '/dist')],
                    verbose: true
                    )
                ]
                )
            }
        }   
    }
}   