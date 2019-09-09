export interface GoogleApiOAuth2TokenObject {
  /**
   * The OAuth 2.0 token. Only present in successful responses
   */
  access_token: string;
  /**
   * Details about the error. Only present in error responses
   */
  error: string;
  /**
   * The duration, in seconds, the token is valid for. Only present in successful responses
   */
  expires_in: string;
  session_state?: string;
  /**
   * The Google API scopes related to this token
   */
  state: string;
}
