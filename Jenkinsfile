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
                sh 'export NODE_OPTIONS=--openssl-legacy-provider'
                sh 'npm run build'

            }
        }  
        stage('Deploy') {
            steps {
                sshPublisher(
                continueOnError: false, 
                failOnError: true,
                publishers: [
                    sshPublisherDesc(
                    configName: "pieterrees.nl",
                    transfers: [sshTransfer(sourceFiles: '/dist/**/*')],
                    verbose: true
                    )
                ]
                )
            }
        }   
    }
}   