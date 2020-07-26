pipeline {
    agent any
    stages {
        stage("Install dependencies"){
            steps {
                sh "pwd"
                echo "printenv"
                echo "npm install"
            }
        }
        stage("Test"){
            steps{
                echo "npm test"
            }
        }
        stage("Sonar Analysis"){
            steps{
                echo "Run sonar analysis"
            }
        }
        stage("Build"){
            steps{
                echo "npm build"
            }
        }
        stage("Package"){
            steps{
                echo "create versioned package"
            }
        }
        stage("Archive"){
            steps {
                echo "archive package"
            }
        }
    }
}