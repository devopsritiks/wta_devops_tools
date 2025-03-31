# World Time App Setup

## Prerequisites
- AWS account and credentials
- Docker and Docker Compose
- Terraform
- Ansible
- Jenkins or GitHub Actions setup
- Security tools: Gitleaks, Trivy, SonarQube

## Local Development
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/world-time-app.git
   cd world-time-app

2. Build and run with Docker Compose:
cd docker
docker-compose up --build

3. Access:
Frontend: http://localhost:8080
Backend: http://localhost:5000/api/time

CI/CD Setup
Jenkins

    Install Jenkins and required plugins (Docker, AWS, SonarQube).
    Configure credentials (AWS, Docker, SSH).
    Create a pipeline job with jenkins/Jenkinsfile.

GitHub Actions

    Add secrets to GitHub repo (AWS, Docker, SSH, SonarQube).
    Push to main to trigger .github/workflows/ci.yml.

Deployment

    Terraform: cd terraform && terraform apply
    Ansible: cd ansible && ansible-playbook -i inventory/ec2.yml playbooks/setup-ec2.yml

Security Scans

    Gitleaks: gitleaks detect --config=security/gitleaks/config.toml --source=.
    Trivy: trivy image --config security/trivy/trivy.yaml <image>
    SonarQube: sonar-scanner -Dproject.settings=security/sonar/sonar-project.properties


---

