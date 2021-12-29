pipeline {
    agent any

    tools {nodejs "nodejs"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install -g serve'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        } 
        stage('Deploy') {
            steps {
                sh 'serve -s build'
            }
        } 
    }
}