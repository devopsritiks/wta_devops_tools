# World Time App

A simple web application displaying digital and analogue clocks with timezone selection, deployed on AWS EC2 using Docker, Terraform, Ansible, and CI/CD pipelines.

## Features
- Digital and analogue clock display
- Timezone selection (50+ major timezones)
- Modern UI with responsive design
- Backend API with Flask
- Deployed on AWS EC2 t3.micro

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Nginx
- **Backend**: Python, Flask
- **Infra**: Terraform (EC2, VPC, subnet, security groups)
- **Container**: Docker, Docker Compose
- **Config**: Ansible
- **CI/CD**: Jenkins, GitHub Actions
- **Security**: Gitleaks, Trivy, SonarQube

## Setup
See [docs/setup.md](docs/setup.md) for detailed instructions.

## Architecture
See [docs/architecture.md](docs/architecture.md) for the system design.

## License
MIT License (see [LICENSE](LICENSE)).
