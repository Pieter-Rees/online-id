pipeline {
    agent any
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