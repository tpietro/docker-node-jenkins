pipeline {
  agent any
  
  stages {
    stage('build') {
      echo 'starting build stage...'
    }
    stage('test') {
      echo 'starting test stage...'
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
