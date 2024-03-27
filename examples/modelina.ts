type MyIntegerType = number

export interface SubscriberCreated {
  /**
   * Id of the mail subscriber.
   */
  id?: MyIntegerType
  /**
   * subscriber intensity Created in engagementScore.
   */
  engagementScore?: MyIntegerType
  /**
   * Email address of the subscriber.
   */
  email?: string
  /**
   * current validation status of subscriber.
   */
  isValidated?: boolean
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface SubscriberRemoved {
  /**
   * Id of the mail subscriber.
   */
  id?: MyIntegerType
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface TemplateCreated {
  /**
   * Id of the mail template.
   */
  id?: MyIntegerType
  /**
   * current validation status of email template.
   */
  isValidated?: boolean
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface InviteCreated {
  /**
   * Id of the mail invite.
   */
  id?: MyIntegerType
  /**
   * Email address to recieve the invite.
   */
  email?: string
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface InviteAccepted {
  /**
   * Id of the mail invite.
   */
  id?: MyIntegerType
  /**
   * Email address to recieve the invite.
   */
  email?: string
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface InviteCancelled {
  /**
   * Id of the mail invite.
   */
  id?: MyIntegerType
  /**
   * Email address to recieve the invite.
   */
  email?: string
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface InviteRejected {
  /**
   * Id of the mail invite.
   */
  id?: MyIntegerType
  /**
   * Email address to recieve the invite.
   */
  email?: string
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}

export interface TurnOn {
  /**
   * Id of the mail subscriber.
   */
  id?: MyIntegerType
  /**
   * Date and time when the message was sent.
   */
  sentAt?: string
  additionalProperties?: Record<string, any>
}
