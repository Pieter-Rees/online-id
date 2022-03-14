pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000 -p 5000:5000'
        }
    }

    environment {
        CI = 'true'
        HOME = '.'
    }

    stages {
        stage('Install') {
            steps {
                echo 'Installing..'
                sh 'npm install'
            }
        }
        stage('Linting') {
            when {
              branch 'testing'
            }
            steps {
                echo 'Linting..'
                sh 'npm run lint'
            }
        }
        stage('Building') {
            steps {
                echo 'Building..'
                sh 'npm run build'
            }
        }
        stage('Generate') {
            steps {
                echo 'Generating static page..'
                sh 'npm run generate'
            }
        }
        stage('Deploying to Testing') {
            when {
              branch 'testing'
            }
            steps {
                echo '!!!Deploying to !esting!!!'
                ftpPublisher alwaysPublishFromMaster: true, continueOnError: false, failOnError: false, masterNodeName: '', paramPublish: null, publishers: [
                    [configName: 'test.pieterrees.nl', transfers: [
                        [asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: "/", remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**/*']
                    ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                ]

            }
        }
        stage('Deploying') {
            when {
              branch 'master'
            }
            steps {
                echo '!!!Deploying!!!'
                ftpPublisher alwaysPublishFromMaster: true, continueOnError: false, failOnError: false, masterNodeName: '', paramPublish: null, publishers: [
                    [configName: 'online-identity', transfers: [
                        [asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: "/", remoteDirectorySDF: false, removePrefix: 'dist', sourceFiles: 'dist/**/*']
                    ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                ]

            }
        }
    }
}
