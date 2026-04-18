pipeline {
    agent any

    environment {
        APP_NAME = "portfolio-website-react"
        IMAGE_NAME = "luqmanarfian/portfolio-website-react"
        IMAGE_TAG = "${BUILD_NUMBER}"
        BRANCH = "main"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', 'docker-cred') {
                        docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                    }
                }
            }
        }

        stage('Deploy with Helm') {
            steps {
                sh """
                helm upgrade --install ${APP_NAME} ./helm/charts \
                --set image.tag=${IMAGE_TAG}
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh "kubectl rollout status deployment/${APP_NAME}"
            }
        }
    }

    post {
        failure {
            sh "helm rollback ${APP_NAME} || true"
        }
    }
}