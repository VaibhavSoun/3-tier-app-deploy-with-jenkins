# 🚀 CI/CD Pipeline for 3-Tier Web Application (GCP VM)

### Jenkins + Docker + Docker Compose + GitHub Webhook

> **Vaibhav Singh Soun** \| DevOps Engineer\
> 📍 Jaipur, India \| ✉️ sounvaibhavjpr@gmail.com

------------------------------------------------------------------------

## 🗺️ Architecture

Developer → GitHub → Webhook → Jenkins → Docker Compose → App
(Frontend + Backend + MongoDB)

------------------------------------------------------------------------

## 📁 Project Structure

3-tier-app-deploy-with-jenkins/ ├── frontend/ ├── backend/ ├──
docker-compose.yml ├── Jenkinsfile ├── README.md

------------------------------------------------------------------------

## ⚙️ Tech Stack

-   Google Cloud Platform (VM)
-   Jenkins
-   Docker & Docker Compose
-   React
-   Node.js
-   MongoDB
-   GitHub Webhooks

------------------------------------------------------------------------

## 🚀 CI/CD Flow

1.  Code push to GitHub\
2.  Webhook triggers Jenkins\
3.  Jenkins:
    -   Checkout
    -   Build
    -   Deploy
    -   Health check\
4.  App deployed automatically

------------------------------------------------------------------------

## 🔧 Jenkins Pipeline

``` groovy
pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/VaibhavSoun/3-tier-app-deploy-with-jenkins.git'
      }
    }

    stage('Build & Deploy') {
      steps {
        dir('3tier-app') {
          sh '''
          docker-compose down || true
          docker-compose up --build -d
          '''
        }
      }
    }

    stage('Health Check') {
      steps {
        sh 'sleep 10'
        sh 'curl -f http://10.160.0.2:3000 || exit 1'
      }
    }
  }
}
```
Jenkins Successfull build -
<img width="1904" height="833" alt="image" src="https://github.com/user-attachments/assets/1da135ef-c17e-49ee-abd6-f085424eb19e" />

------------------------------------------------------------------------

## 🌐 Access App

http://34.180.31.165:3000

------------------------------------------------------------------------

## 🔗 Webhook

http://34.180.31.165:8080/github-webhook/

------------------------------------------------------------------------

## 🧪 Manual Run

docker-compose up --build -d

------------------------------------------------------------------------

## 👤 Author

Vaibhav Singh Soun
