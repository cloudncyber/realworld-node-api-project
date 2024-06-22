pipeline {
    agent any

    environment {
        PATH = /home/ubuntu/.nvm/versions/node/v20.15.0/bin/npm" // Ensure this points to your Node.js and npm binaries
    }

    stages {
        stage('Checkout code from github to jenkins workspace') {
            steps {
                // Checkout the code from the repository
                git branch: 'main', url: 'https://github.com/cloudncyber/realworld-node-api-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                //sh 'bash node.sh'
                sh 'npm install express'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
        stage('Archive Artifacts') {
            steps {
                // Archive the build artifacts
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            // Clean up the workspace after the build
            cleanWs()
        }
        
        success{
            echo "Everything is done..."
        }
        
        failure{
            echo "There is a problem somewhere..."
        }
    }
}
