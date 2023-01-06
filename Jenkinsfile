pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Install') {
            steps {
                echo 'Installing pnpm'
                sh 'npm install pnpm -g'
                echo 'Installing with pnpm'
                sh 'pnpm install'
            }
        }   
        stage('Build') {
            steps {
                sh 'pnpm run build'
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
                    transfers: [sshTransfer(sourceFiles: 'build/**', removePrefix: 'build')],
                    verbose: true
                    )
                ]
                )
            }
        }   
    }
}   