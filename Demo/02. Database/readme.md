#### Using a StorageClass, PersistentVolume, PersistentVolueClaim, and ConfigMap

This example shows different types of storage options that can be used. Because a local Kubernetes is running (with a single Node), we'll
only use the local-storage option, however in cloud scenarios the SC/PVC could be modififed as appropriate for the cloud provider's storage options.

## Running the MongoDB Deployment

1. Create the following folder structure on your local system:

Mac/Linux: /tmp/data/db
Windows:   c:/temp/data/db

2. If you're on Mac/Linux go into `mongo.deployment.yml` and change the PersistentVolume's local path to `/tmp/data/db`. Save the file.

3. Start up the Pod:

    `kubectl apply -f mongo.deployment.yml`

4. Run `kubectl get pods` to see the pod.
5. Run `k exec [mongo-pod-name] -it sh` to shell into the container. Run the `mongo` command to make sure the database is working. Type `exit` to exit the shell.

    Note: If you have a tool that can hit MongoDB externally you can `kubectl port-forward` to the pod to expose 27017.

6. Validate the MongoDB admin user is correctly set by running `mongo -u admin -p --authenticationDatabase admin` and providing `password` when promted.

6. Delete the mongo Pod: `kubectl delete pod [mongo-pod-name]`.

7. Once the pod is deleted, run `kubectl get pv` and note the reclaim policy that's shown and the status (should show Bound since the policy was Retain.

8. Delete everything else: `kubectl delete -f mongo.deployment.yml`.