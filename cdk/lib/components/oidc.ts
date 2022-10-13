import { Construct } from 'constructs';
import { GithubActionsRole, GithubActionsIdentityProvider } from 'aws-cdk-github-oidc';
import { ManagedPolicy } from 'aws-cdk-lib/aws-iam';

export class oidc{
  constructor(scope: Construct, rolename: string, repo: string, provider: GithubActionsIdentityProvider) {

    const accessSSMRole = new GithubActionsRole(scope, rolename, {
      provider: provider,           // reference into the OIDC provider
      owner: 'kreuzwerker',            // your repository owner (organization or user) name
      repo: repo,            // your repository name (without the owner name)
      roleName: rolename
    });
    accessSSMRole.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));
  }
}