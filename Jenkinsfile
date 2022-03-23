pipeline {
    agent any
    stages {
        stage('Install') {
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
        // stage('Deploy') {
        //     agent any
        //     steps {
        //         sshPublisher(
        //         continueOnError: false, 
        //         failOnError: true,
        //         publishers: [
        //             sshPublisherDesc(
        //             configName: "pieterrees.nl",
        //             transfers: [sshTransfer(sourceFiles: '/dist')],
        //             verbose: true
        //             )
        //         ]
        //         )
        //     }
        // }   
    }
}   