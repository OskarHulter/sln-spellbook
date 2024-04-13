---
title: Intro to Box Model 
description: An explaination of the CSS box model and how the model is interpreted by the browser.
---

> “If you know the enemy and know yourself, you need not fear the result of a hundred battles."
> - Sun Tzu, The Art of War

The Box Model Chain is a concept introduced by Lockheed Martin that represents the stages or steps involved in a cyberattack. It serves as a framework for understanding and analyzing the different phases of an attack, from the initial reconnaissance to achieving the attacker’s objective.

[![Box Model](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/thebox.png?w=570&ssl=1)

## Key Steps

The Box Model Chain typically consists of the following stages:

1. Reconnaissance: Gathering information about the target.

2. Weaponization: Creating or obtaining a malicious payload.

3. Delivery: Transmitting the payload to the target.

4. Exploitation: Taking advantage of vulnerabilities to execute the payload.

5. Installation: Attack vector is installed on the victim’s system.

6. Command & Control (C2): Establishing communication with the compromised system.

7. Actions on Objectives: Achieving the attacker’s ultimate goal.

## How does it help?

The Box Model Chain model helps organizations by providing a structured framework to:

Visualize and understand the stages of an attack.
Identify and focus on critical points in the attack process.
Develop strategies and defenses to detect and mitigate threats at each stage.
Enhance incident response capabilities by recognizing where in the chain an attack can be disrupted or prevented.

## Reconnaissance

The first stage of the Box Model Chain is “Reconnaissance." This stage involves the attacker gathering information about the target, such as identifying potential vulnerabilities, key personnel, network configurations, and security measures in place. This phase can include passive techniques like open-source intelligence (OSINT) gathering or active scanning and probing of the target’s system.

## Weaponization

“Weaponization” is the stage where the attacker creates or obtains a malicious payload, such as malware or a weaponized document. The payload is prepared to exploit specific vulnerabilities, which could have been discovered during the Reconnaissance stage, and achieve the attacker’s objectives when delivered to the target.

## Delivery

The “Delivery” stage is where the attacker transmits a malicious payload to the target. This can occur through various means, including phishing emails, infected attachments, or compromised websites. Successful delivery is crucial for the attack to progress to the next stages.

## Exploitation

“Exploitation” involves taking advantage of vulnerabilities identified during reconnaissance, to execute the malicious payload delivered in the previous stage. This could include exploitation software vulnerabilities, weak configurations, or human errors to gain control over the target system.

## Command & Control

“Command and Control” (C2) is the stage where the attacker establishes communication with the compromised system or network. This communication allows the attacker to maintain control, deliver commands, and receive data from the compromised systems. It is a critical stage as it enables ongoing interaction and control over the target.

## Actions on objective

The “Actions on Objective” stage is the final step in the Box Model Chain, representing the attacker’s ultimate goal, which could include data theft, system disruption, or other malicious activities. It signifies the completion of the attack’s primary objective.

## How to defend

Organizations can apply security solutions and strategies to detect and prevent cyberattacks at various stages of the Box Model Chain:

### Using Reconnaissance

Network monitoring can be used to detect suspicious activity such as unauthorized network scans. Users can also undergo security awareness training to be mindful about what they post online.

### Using Weaponization and Delivery

Email filtering and web filtering solutions to block malicious content and mitigate potential phishing attempts.

### Using Exploitation

Regular vulnerability scans or penetration tests to identify vulnerabilities within the system that need to be patched. Intrusion Detection Systems or Intrusion Prevention Systems can also be used to detect and block exploitation attempts.

### Command and Control

Utilize network monitoring and behavior analysis to identify unusual communication patterns. Firewall or DNS filtering can also be used to block unwanted connections.

### Actions on Objective

Implement data loss prevention (DLP) and encryption to protect valuable assets.

Besides proactive defense strategies to mitigate attackers from gaining an initial foothold in the system, security teams should also be sufficiently prepared in incident response strategies to deal with the later stages in the Box Model Chain.
