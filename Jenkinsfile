pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                // test building for errors
                sh cd 'frontend-react'
                sh 'npm install'
                sh 'npm run build'
                // linting
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                // run tests
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                // to understand
            }
        }
    }
}
