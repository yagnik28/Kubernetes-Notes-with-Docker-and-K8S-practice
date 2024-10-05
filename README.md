# Kubernetes Overview

Kubernetes is an orchestration tool for managing Docker containers, making it essential for large applications that may consist of hundreds or thousands of containers, such as microservice applications.

---

## Architecture

### Master Node

The Master Node manages the Kubernetes cluster and consists of four key processes:

1. **API Server**: The entry point for the Kubernetes (k8s) cluster, which can also be accessed via a UI and the Kubernetes CLI (Kubectl).
2. **Scheduler**: Responsible for deciding and scheduling which pod is sent to which worker node based on workload and required resources, utilizing etcd storage to track the state of nodes.
3. **Controller Manager**: Manages all pods in the cluster, monitoring their status and ensuring the desired state is maintained. If any pod fails, it instructs the Scheduler to add a new pod to the appropriate node.
4. **etcd**: The backing store for Kubernetes, storing key-value pairs that represent the current state of the cluster.

If multiple Master Nodes are present, the API Server will be load-balanced, and etcd will serve as distributed storage.

### Worker Node

Worker Nodes contain various pods and three key processes:

1. **Kubelet**: Acts as an interface between pods and the node, responsible for running any pod in the cluster using the container runtime (e.g., Docker).
2. **Kube Proxy**: Forwards requests from services to pods, intelligently trying to direct requests to replicas on the same node when possible.
3. **Container Runtime**: The runtime environment for running containers, typically using Docker.

### Virtual Network

A unified virtual network connects all worker nodes and acts as a bridge between the master and worker nodes.

---

## Key Concepts

- **Node**: A physical or virtual machine running master or worker processes.
- **Pod**: An abstraction over containers, usually containing a single container.
- **IP Address**: Each pod is assigned a virtual IP address. When a pod is replaced, its IP address changes.
- **Service**: Provides a permanent IP address and acts as a load balancer for multiple replicas of a pod.
- **Ingress**: An external IP address that handles domain-to-IP conversions for applications, allowing access from the internet.
- **ConfigMap**: Allows configuration changes without the need to rebuild or recreate images.
- **Secret**: Used for confidential configuration changes, such as database usernames and passwords.
- **Volume**: Provides persistent storage, ensuring data is retained across container restarts.
- **Deployment**: Manages the creation of replicas of pods for stateless containers across worker nodes.
- **StatefulSet**: Manages the deployment of stateful containers, ensuring consistency for databases and other applications that require ordered writes and reads.

---

## Tools

- **MiniKube**: A tool that creates a Kubernetes cluster on a single machine, running both master and worker processes.
- **Kubectl**: The command-line interface for managing Kubernetes clusters, allowing commands to be sent to worker nodes.
- **Minikube CLI**: Commands for starting and deleting clusters.
- **Kubectl CLI**: Used for configuring the cluster.

---
