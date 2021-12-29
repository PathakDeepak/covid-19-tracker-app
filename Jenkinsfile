pipeline {
    agent {
        docker {
            image '16.13.1-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}