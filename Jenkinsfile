pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 17.8.0', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
                echo 'Installing..'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'

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