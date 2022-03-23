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
    }
}   