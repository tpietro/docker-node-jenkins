pipeline {
  agent any
  
  environment {
    dockerhub=credentials('docker-hub')
  }
  
  stages {
    stage('build') {
      steps {
        echo 'starting build stage...'
        echo "DH $dockerhub_USR $dockerhub_PSW "
        sh(script: 'docker images -a')
        sh(script: 'docker logout')
        sh(script: "docker build --tag node-docker:v0.${env.BUILD_ID} . ")
        
        
      }
    }
    stage('test') {
      steps {
        echo 'starting test stage...'
      }
    }
  }
  
  post {
    always {
      echo 'in post.always'
    }
    success {
      echo 'in post.success'
    }
    failure {
      echo 'in post.failure'
    }
  }
}
