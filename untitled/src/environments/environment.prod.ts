import {KeycloakConfig} from 'keycloak-angular';

export let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth/',
  realm: 'Dziennik',
  clientId: 'DziennikFront',
};

export const environment = {
  production: false,
  keycloakConfig,
};
