import React, { useState } from "react";
import Link from "next/link";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import {useRef, useEffect} from 'react';


const Terms = ({ sliderRef, blackStar }) => {
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.getElementById()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const el = document.getElementById('container');
    console.log(el);
  }, []);
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div ref={ref} id="container" className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
            <br /><br /><br /><br /><br />
              <h1>
                <span className="color-font">AGOD Ecosystem</span><br /><br /> Terms of Service & Conditions <br />
              </h1>
              <br /><br />
              <h6>
              <span>Interpretation<br />
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
Definitions
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.<br />
* 		Affiliate means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
<br />* 		Country refers to: México.
<br />* 		Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to AGOD Protocol, Lázaro Cárdenas 74, NY 63732.
<br />* 		Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
<br />* 		Service refers to the Website.
<br />* 		Terms and Conditions (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and AGOD Protocol regarding the use of the Service.
<br />* 		Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
<br />* 		Website refers to AGOD Protocol, accessible from https://agodprotocol.com
<br />* 		You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
Acknowledgment
<br />These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
There are other terms that may apply to you. These terms of use refer to the following additional terms, which also apply to your use of our site: Our Privacy Policy – https://agodprotocol.com/PrivacyPage. Please refer to our Privacy Policy on how we collect, use and disclose information about our users. Our Cookie Policy – https://agodprotocol.com/PrivacyPage, which sets out information about the cookies on our site.
Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
User Contributions
<br />The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards and other interactive features (collectively, “Interactive Services”) that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, “post”) content or materials (collectively, “User Contributions”) on or through the Website.
All User Contributions must comply with the Content Standards set out in these Terms of Use.
Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Website, you grant the Company and our Affiliates, and assignees the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.
<br />You represent and warrant that:
<br />You own or control all rights in and to the User Contributions and have the right to grant the license granted above to us and our Affiliates. All of your User Contributions do and will comply with these Terms of Use. You understand and acknowledge that you are responsible for any User Contributions you submit or contribute, and you, not the Company, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness. We are not responsible or liable to any third party for the content or accuracy of any User Contributions posted by you or any other user of the Website. By posting User Contributions, you hereby release AGOD Protocol and its agents and employees from any claims that such use, as authorized above, violates any of your rights and you understand that you will not be entitled to any additional compensation for any use of your User Contributions.
<br />You agree not to post, send or create User Contributions that are in compliance with the following (Content Standards):
<br />* 		In any way that breaches any applicable local, national or international law or regulation.
<br />* 		In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect.
<br />* 		Defamatory of any person, obscene, offensive, hateful or inflammatory, bully, insult, intimidate or humiliate, promote sexually explicit material, include child sexual abuse material and promote violence.
<br />* 		Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.
<br />* 		Infringe any copyright, database right or trademark of any other person.
<br />* 		Be likely to deceive any person.
<br />* 		Breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence.
<br />* 		Promote any illegal content or activity.
<br />* 		Be in contempt of court.
<br />* 		Be threatening, abuse or invade another’s privacy, or cause annoyance.
<br />* 		Be likely to harass, upset, embarrass, alarm or annoy any other person.
<br />* 		Impersonate any person or misrepresent your identity or affiliation with any person.
<br />* 		Give the impression that the Contribution emanates from the Company, if this is not the case.
<br />* 		Advocate, promote, incite any party to commit, or assist any unlawful or criminal act such as (by way of example only) copyright infringement or computer misuse.
<br />* 		Contain a statement which you know or believe, or have reasonable grounds for believing, that members of the public to whom the statement is, or is to be, published are likely to understand as a direct or indirect encouragement or other inducement to the commission, preparation or instigation of acts of terrorism.
<br />When we consider that a breach of the User Contribution has occurred, we may take such action as we deem appropriate. If you wish to complain about content uploaded by other users, please contact us at admin@agod.mx By posting User Contributions, you hereby release AGOD Protocol and its agents and employees from any claims that such use, as authorized above, violates any of your rights and you understand that you will not be entitled to any additional compensation for any use of your User Contributions.
Website Use
<br />You may use our Website only for lawful purposes. You may not use our Website:
<br />* 		In any way that breaches any applicable local, national or international law or regulation.
<br />* 		In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect.
<br />* 		To bully, insult, intimidate or humiliate any person.
<br />* 		To send, knowingly receive, upload, download, use or re-use any material which does not comply with our User Contributions.
<br />* 		To transmit, or procure the sending of any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam).
<br />* 		To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware. You also agree:
<br />* 		Not to reproduce, duplicate, copy or re-sell any part of our Website in contravention of the provisions of our Terms of Service.
<br />* 		Not to access without authority, interfere with, damage or disrupt: any part of our Website; any equipment or network on which our Website is stored; any software used in the provision of our Website; or any equipment or network or software owned or used by any third party.
<br />* 		Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.
<br />* 		Otherwise attempt to interfere with the proper working of the Website.
<br />USER-GENERATED CONTENT IS NOT APPROVED BY US.
<br />This Website may include information and materials uploaded by other users of the Website, including to forums. Unless expressly stated, this information and materials have not been verified or approved by us. The views expressed by other users on our Website do not represent our views or values. We refer you to the section see User Contributions for further information.
Intellectual Property
<br />We are the owner or the licensee of all intellectual property rights in our Website, and in all the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
You may print off one copy, and may download extracts, of any page(s) from our Website for your personal use and you may draw the attention of others within your organization to content posted on our Website.
Unless stated otherwise, you must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.
Our status (and that of any identified contributors) as the authors of content on our Website must always be acknowledged.
You must not use any part of the content on our Website for commercial purposes without obtaining a license to do so from us or our licensors.
If you print off, copy or download any part of our Website in breach of these terms of use, your right to use our Website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.
<br />UPLOADING CONTENT TO OUR WEBSITE
<br />Whenever you make use of a feature that allows you to upload content to our Website, or to make contact with other users of our Website, you must comply with the standards set out in User Contributions.
You warrant that any such contribution does comply with these standards, and you will be liable to us and indemnify us for any breach of that warranty. This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.
We make no claims as to ownership or control over any User Contributions. Any content you upload to our Website will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, but you are required to grant us a limited license to use, store and copy that content and to distribute and make it available to third parties.
The rights you license to us are described in Rights you are giving us to use User Contributions.
We also have the right to disclose your identity to any third party who is claiming that any content posted or uploaded by you to our Website constitutes a violation of their intellectual property rights, or of their right to privacy.
We have the right to remove any posting you make on our Website if, in our opinion, your post does not comply with the content standards set out in User Contribution. Please read the User Contributions for full details.
<br />Links to Other Websites
<br />Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
<br />Termination
<br />We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
Upon termination, Your right to use the Service will cease immediately.
<br />Limitation of Liability
<br />TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO,, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
<br />Disclaimer of Warranties
<br />You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
Some jurisdictions do not allow the certain types of warranties or limitations on applicable statutory rights of a consumer. Some or all of the above exclusions and limitations may not apply to You. In such case the exclusions and limitations set forth in this section shall be applied to the greatest extent possible under applicable law.
<br />Governing Law
<br />The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
<br />Arbitration
<br />If you have any dispute about the Service, you first agree to reach an agreement with the Company using your best endeavors to resolve.
<br />For European Union (EU) Users
<br />If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
<br />United States Legal Compliance
<br />You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
<br />Severability
<br />If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
<br />Waiver
<br />Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party’s ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
<br />Indemnification
<br />You agree to defend, indemnify, and hold harmless the Company, its Affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms of Use or your use of the Website, including, but not limited to, your User Contributions, your violation of rights of another or your conduct in relation to the Website. Some jurisdictions limit consumer indemnities, therefore some or all of the indemnity provisions above may not apply to you.
<br />Monitoring and Enforcement; Termination
<br />We have the right to:
<br />* 		Remove or refuse to post any User Contributions for any violations of these Terms of Use.
<br />* 		Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion, including if we believe that such User Contribution violates the Terms of Use, including the Content Standards, infringes any intellectual property right or other right of any person or entity, threatens the personal safety of users of the Website or the public, or could create liability for the Company.
<br />* 		Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.
<br />* 		Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website.
<br />* 		Terminate or suspend your access to all or part of the Website for any reason, including without limitation, any violation of these Terms of Use.
<br />* 		Without limiting the foregoing, we have the right to cooperate fully with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Website. YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS AFFILIATES FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY THE COMPANY, DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER THE COMPANY OR LAW ENFORCEMENT AUTHORITIES.
<br />We cannot review all material before it is posted on the Website, and cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party. We have no liability or responsibility to anyone for performance or nonperformance of the activities described in this section.
<br />Translation Interpretation
<br />These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
<br />Changes to These Terms and Conditions
<br />We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. You agree we will not be liable for any revisions, modifications or suspension of the Website. By continuing to access or use Our Service after those revisions become effective. You agree to be bound by the revised terms. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time. If you do not agree to the new terms, whole or in part, please stop using the Website.</span>
              </h6>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      {/* <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      /> */}

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Terms;
