# Generative AI Prototyping: Experimentation for all organisations

Materials accompanying an L200 Talk, presented at the AWS Sydney Summit 2024.

## Summary

Generative AI (GenAI) stands as a transformative force, offering a myriad of opportunities for innovation across all organizational levels. By embracing a phased development approach—from a proof of concept that validates ideas without the need for extensive technical expertise, through prototyping with tools like Amazon PartyRock and GenStack, to achieving a Minimum Viable Product—organizations can streamline their path to integrating GenAI into their operations.

This process not only democratizes access to GenAI experimentation, enabling professionals from diverse backgrounds to contribute to AI-driven solutions, but also paves the way for businesses to explore the potential impact and value of GenAI applications within their specific contexts, ultimately fostering a culture of innovation and continuous improvement.

![Stages of Development](/docs/stages.jpg)

## Stages of Development

### 1. Proof of Concept

Once an idea is conceived, the next step is to validate its feasibility. This stage is not solely the realm of technologists. Subject Matter Experts from diverse backgrounds should be encouraged to explore how Generative AI can enhance their professional outcomes.

Amazon PartyRock is an Amazon Bedrock Playground, offers an intuitive, hands-on experience in generative AI app development accessible to all. Traditionally, building an AI app required programming skills, but with PartyRock, a basic understanding of prompt engineering suffices. This skill is increasingly common among professionals due to tools like ChatGPT.

PartyRock can also be an excellent tool for organizations looking to conduct internal hackathons. Its no-code requirement and the ubiquity of prompt engineering knowledge, even among non-technical AI users, facilitates cross-departmental AI experimentation and supports internal AI development initiatives.

The goal of this stage should be to **demonstrate potential business impact**. It's probably not ready for internal usage, but you can confirm "Yeah, this is worth a crack".

#### References

* [Amazon PartyRock](https://partyrock.aws/)
* [Job Description Generator App - PartyRock](https://partyrock.aws/u/ssennettau/apnr5Amk2/Job-Description-Generator)

### 2. Prototype

After developing a solid concept, it's time to consider internalizing our app. While PartyRock is an excellent experimental platform, it may not suit enterprise needs. Transitioning the app in-house is crucial for various reasons, though this can be time-consuming. Our goal is to provide a seamless experience for developers to build upon.

[GenStack](https://genstack.ssennett.net/) is an open-source project I created that transforms Amazon PartyRock apps into comprehensive JavaScript applications (utilizing SvelteKit). This transition offers a frontend experience similar to PartyRock, alongside a backend that manages communication with Amazon Bedrock. GenStack enables you to deploy your application across your organization and to experimentally enhance it beyond PartyRock's capabilities.

Adapting the application to align with corporate branding and ensuring consistency with other corporate applications are common steps. Given that the application utilizes Tailwind CSS, visual modifications are straightforward. Functional adjustments are also feasible, with the project's open-source nature allowing any developer familiar with TypeScript and SvelteKit to make changes.

The goal of this stage should be to **demonstrate that the solution helps people achieve their goals**. It also provides a space to explore some challenges with the use case, like flexibility of design, integration with other systems, or data sovereignty.

#### References

* [Basic GenStack App](https://jobdescription-1.ssennett.net)
* [Customized GenStack App](https://jobdescription-2.ssennett.net)

### 3. Minimum Viable Product

Most organizations prefer to standardize their tech stacks, making GenStack's framework possibly ill-suited for long-term integration. In such cases, rebuilding the application on a standardized platform or incorporating its functionality into an existing solution, like a CRM, becomes necessary.

Even for organizations with established application templates, transitioning to a fully developed solution requires significant time and resources from engineering teams, at least a sprint or two — a commitment few businesses will undertake without proven value.

By the time you reach this stage, having already developed a prototype, the business value should be clear, substantially reducing the risk associated with developing a permanent solution. The specifics of use case and implementation should be largely defined.

The goal of this stage should be to **establish a foundation for a solution that will become a permanent fixture within the organization**. Where it goes from here is in your hands.

#### References

* [Amazon Bedrock Service Information](https://aws.amazon.com/bedrock/)
* [AWS SDK's for various languages](https://aws.amazon.com/developer/tools/)
* [Amazon Bedrock Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/a4bdb007-5600-4368-81c5-ff5b4154f518/en-US)

![Recent History of GenAI](/docs/history.jpg)

## Further Exploration

When experimenting with prototyping Generative AI solutions, there's a few topics you might encounter. Here's a brief discussion of several, and some options on how to approach them.

### Security and Compliance

Security is paramount in all we do, especially when working with Generative AI. Prior to engaging with any use case, it's crucial to assess the implications of data usage. 

PartyRock itself is designed to be a public platform, and sensitive information should not be used. However, you can use mock data to prove the concepts. For example, in the Job Description Generator app, avoid including sensitive details. Applications can be kept private or shared publicly, but there's no option for restricted sharing.

Amazon Bedrock hosts the LLM's powering applications from PartyRock and GenStack and above. While the default hosting region is `us-east-1`, consider compliance and data sovereignty concerns, especially if data restrictions apply, like under the [Australian Privacy Principles (APP11)](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information). While Bedrock is available in other [Supported Regions](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html), it is not currently available locally in Australia or New Zealand.

Amazon's policy on data usage (see [Bedrock FAQ](https://aws.amazon.com/bedrock/faqs/#product-faqs#bedrock-faqs#security-and-privacy)) assures that your data is not used for model training by Amazon or third parties. Nonetheless, any use involving personally identifiable information warrants careful scrutiny.

### Ethics

Generative AI's capabilities are vast, but not all potential uses are appropriate. Consider the ethical implications of AI applications, especially in sensitive contexts. For instance, summarizing meeting notes with AI is generally acceptable, but using such summaries as the basis for disciplinary actions introduces significant risks.

The legal field presents another example, where reliance on AI without human oversight can lead to misunderstandings or inaccuracies, as demonstrated by the [Mata v Avianca](https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html) case. It's crucial for subject matter experts to collaborate closely with technical teams, acknowledging both the potential and limitations of the technology.

### Structured Experimentation

While anyone can create a proof-of-concept on Amazon PartyRock, structured processes enhance outcomes. Internal hackathons, for instance, encourage collaborative problem-solving across disciplines. Technical support, not necessarily from AI experts, is vital for addressing prompt engineering and security considerations. Even helpdesk teams can offer valuable technical assistance.

Assessing the business value and impact of experiments is critical. This evaluation helps determine whether an application meets the requirements, could benefit from further development, or suffices in its prototype form.

## Additional Resources and Tips

* [State of Data & AI 2024](https://mantelgroup.com.au/state-of-data-ai-2024-report/) by [Mantel Group](https://mantelgroup.com.au/)
* [Running your first internal hackathon](https://leaddev.com/culture-engagement-motivation/running-your-first-internal-hackathon) by [LeadDev](https://leaddev.com/)