pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs', configId: '<config-file-provider-id>') {
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
    }
}   