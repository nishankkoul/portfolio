import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import celestia from "../../Assets/Projects/celestia-1.jpeg";
import ollama from "../../Assets/Projects/ollama-2.jpeg";
import game2048 from "../../Assets/Projects/2048-game-3.png";
import jenkins from "../../Assets/Projects/jenkins-cicd-4.png";
import github from "../../Assets/Projects/github-5.jpeg";
import lambda from "../../Assets/Projects/lambda-6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={celestia}
              isBlog={false}
              title="Celestia Validator Node Deployment"
              description="Celestia is a modular blockchain that enhances scalability by separating consensus and data availability. Deploying a validator node on the Mocha-4 testnet can be complex, but Ansible automation simplifies the process. This project streamlines deployment, security, and monitoring—ensuring a robust, scalable, and efficient validator setup."
              ghLink="https://github.com/nishankkoul/celestia-validator-deployment"
              demoLink="https://nishankkoul.hashnode.dev/celestia-validator-node-deployment-on-mocha-4-testnet"
              demoText="Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ollama}
              isBlog={false}
              title="Scalable LLM Inference Service with Ollama"
              description="Designed and deployed a scalable LLM inference service, enabling seamless interaction with a language model through a containerized API. Ensured high availability and optimized performance by automating deployment, monitoring, and load testing. "
              ghLink="https://github.com/nishankkoul/Ollama-App"
              demoLink="https://nishankkoul.hashnode.dev/building-a-scalable-llm-inference-service-with-ollama"
              demoText="Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game2048}
              isBlog={false}
              title="2048 Game Deployment with EKS"
              description="Deploying the 2048 game on AWS Elastic Kubernetes Service (EKS) ensures scalability, reliability, and seamless management. This project automates the deployment process, leveraging Kubernetes for efficient container orchestration. It showcases cloud-native best practices, ensuring smooth performance and effortless scaling."
              ghLink="https://github.com/nishankkoul/2048-Game-EKS"
              demoLink="https://nishankkoul.hashnode.dev/deploying-a-2048-game-app-with-aws-eks"
              demoText="Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title="Jenkins End-To-End CI/CD using ArgoCD"
              description="This project implements a CI/CD pipeline for a Java application, ensuring seamless automation from code commits to deployment. Jenkins, Maven, SonarQube, and Docker streamline code building, testing, and security checks, while ArgoCD automates Kubernetes deployment. The entire workflow enhances code quality, security, and continuous delivery, ensuring a robust and scalable application lifecycle."
              ghLink="https://github.com/nishankkoul/Jenkins-CICD"
              demoLink="https://nishankkoul.hashnode.dev/jenkins-end-to-end-cicd-project-using-argocd"
              demoText="Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Automating GitHub Repository Access with Bash and API Integration"
              description="Managing GitHub repository access can be challenging with multiple collaborators. This project automates access management using a Bash script integrated with the GitHub API, making it easy to list users with repository access. It ensures secure handling of credentials while streamlining repository access control."
              ghLink="https://github.com/nishankkoul/Access-Management-using-GitHub-API"
              demoLink="https://nishankkoul.hashnode.dev/automating-github-repository-access-with-bash-and-api-integration"
              demoText="Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lambda}
              isBlog={false}
              title="Cloud Cost Optimization using AWS Lambda"
              description="Optimizing cloud costs is essential for maintaining an efficient infrastructure. This project automates EBS snapshot management using an AWS Lambda function, identifying and deleting stale snapshots to reduce unnecessary storage costs. Leveraging Boto3, it ensures seamless integration with AWS for cost-efficient cloud resource management."
              ghLink="https://github.com/nishankkoul/AWS-Lambda-Cost-Optimization"
              demoLink="https://nishankkoul.hashnode.dev/cloud-cost-optimization-using-aws-lambda"
              demoText="Blog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
