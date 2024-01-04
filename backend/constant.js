const nodemailer = require("nodemailer");
require("dotenv").config();
const createAndSendEmail = async (opts) => {
  try {
    let response = undefined;
    console.log({
      user: process.env.SENDER_EMAIL_HERE,
      pass: process.env.SENDER_EMAIL_PASSWORD,
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
    });
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL_HERE,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });
    console.log("created");
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error, "verify");
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    const mailOpts = {
      from: "AGOD EcoSystem <" + process.env.SENDER_EMAIL_HERE + ">",
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    };

    transporter.sendMail(mailOpts, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message %s sent: %s", info.messageId, info.response);
    });
    console.log("sent");
    return "abc";
  } catch (error) {
    console.log({ error: error, error2: error });
    return { error: error, response: error };
  }
};
function getReqData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      // listen to data sent by client
      req.on("data", (chunk) => {
        // append the string version to the body
        body += chunk.toString();
      });
      // listen till the end
      req.on("end", () => {
        // send back the data
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}



let EmailHtml = (email)=>`
<link
href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
rel="stylesheet"
/>
<table
style="
  max-width: 650px;
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  background-color: rgb(255, 255, 255);
"
>
<tbody>
  <tr>
    <td>
      <p
        style="
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 19px;
          width: 78%;
          margin: 15px auto;
        "
      >
        DISCOVER HOW TO UNLOCK THE BLOCKCHAIN'S FULL POTENTIAL
      </p>
    </td>
  </tr>
  <tr>
    <td
      style="
        background-image: url('https://agodecosystem.com/img/emailtemplatesimages/UPPER_PLANET1.png');
        height: 650px;
        width: 650px;
        margin-top: 30px;
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <img
        src="https://agodecosystem.com/img/emailtemplatesimages/Destiny.png"
      />
      <p
        style="
          text-align: center;
          color: #000;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          margin: 30px 0px 0px;
        "
      >
        You are now subscribed
      </p>
      <p
        style="
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 45px;
          text-align: center;
          color: #000;
          margin: 0px;
        "
      >
        WELCOME!
      </p>
      <p
        style="
          font-style: normal;
          font-weight: 900;
          font-size: 23px;
          line-height: 34px;
          color: #000;
          margin: 60px 0px 0px;
        "
      >
        We are very excited to have you join
      </p>
      <p
        style="
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          text-align: center;
          color: #000;
        "
      >
        Our incredible community.
      </p>
    </td>
  </tr>
  <tr>
    <td style="width: 100%; text-align: center">
      <p
        style="
          background: linear-gradient(0deg, #c13145, #c13145);
          border-radius: 9px;
          margin: 90px auto;
          width: 80%;
          text-align: right;
          color: #fff;
          padding: 60px 0px;
          border-radius: 10px;
          max-height: 230px;
        "
      >
        <span
          style="
            font-size: 20px;
            display: block;
            margin: 0px 40px;
            text-align: center;
          "
        >
          One of our goals as AGOD’ers is to reach financial freedom as a
          community. By taking control of our money and our investments,
          we’ll be able to reach this goal together.
        </span>
        <br />
        <img
          src="https://agodecosystem.com/img/emailtemplatesimages/Planet1.png"
          style="height: 177px"
        />
      </p>
    </td>
  </tr>
  <tr>
    <td
      style="
        background-image: url(https://agodecosystem.com/img/emailtemplatesimages/telegram_w1.png);
        width: 277.99px;
        height: 359.2px;
        background-repeat: no-repeat;
        background-size: 46%;
      "
    >
      <p
        style="
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 54px;
          text-align: center;
          color: rgb(0, 0, 0);
          margin: 0px;
          margin-top: 20%;
        "
      >
        Stay tuned
      </p>
      <p
        style="
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 36px;
          text-align: center;
          color: rgb(0, 0, 0);
        "
      >
        for the latest on our official <br />
        channels.
      </p>
      <p
        style="
          text-align: center;
          font-style: normal;
          font-weight: 900;
          font-size: 20px;
          line-height: 30px;
          color: rgb(0, 0, 0);
          text-decoration: underline;
          cursor: pointer;
          margin-bottom: 50px;
        "
      >
        @AGODProtocol
      </p>
    </td>
  </tr>
  <tr>
    <td style="width: 100%; text-align: center">
      <p
        style="
          margin: 0px 27px;
          text-align: center;
          color: #fff;
          padding: 40px 34px;
          border-radius: 10px;
          margin-bottom: 30px;
          margin-top: 0;
          background: linear-gradient(0deg, #c13145, #c13145);
          border-radius: 9px;
        "
      >
        <span
          style="
            font-weight: 400;
            font-size: 28px;
            line-height: 42px;
            text-align: center;
          "
        >
          With leaks, updates, community challenges and competitions, you
          and your fellow crypto-enthusiasts are now part of the universe
          of interconnected experiences.
        </span>
      </p>
    </td>
  </tr>
  <tr>
    <td
      style="
        background-image: url(https://agodecosystem.com/img/emailtemplatesimages/WAVES21.png);
        width: 786px;
        height: 676px;
        background-repeat: no-repeat;
        text-align: right;
      "
    >
      <p
        style="
          width: 45%;
          margin-left: auto;
          margin-right: 5%;
          text-align: center;
          color: #000;
          font-size: 18px;
        "
      >
        You are now entering the dawn of a new era. <br />
        <span style="font-weight: 800; font-size: 22px">
          Transmission Received</span
        >
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p
        style="
          font-weight: 700;
          font-size: 26px;
          line-height: 39px;
          color: #000;
          text-align: center;
        "
      >
        Check us out
      </p>
    </td>
  </tr>
  <tr>
    <td style="text-align: center">
      <img
        src="https://agodecosystem.com/img/emailtemplatesimages/Rectangle23.png"
      />
    </td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td>
      <p
        style="
          width: 40%;
          margin: auto;
          margin-top: 20px;
          text-align: center;
        "
      >
        <a
          href="https://twitter.com/AgodEcosystem"
          target="_blank"
          style="
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            text-align: center;
            color: #000000;
            text-decoration: underline;
            width: 30%;
            display: inline-block;
            cursor: pointer;
          "
        >
          <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle19.png" style="margin-bottom: 10px" />
        </a>
        <a
          href="https://www.instagram.com/AgodEcosystem/"
          target="_blank"
          style="
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            text-align: center;
            text-decoration: underline;
            color: #000000;
            width: 30%;
            display: inline-block;
            cursor: pointer;
          "
        >
          <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle20.png" style="margin-bottom: 10px" />
        </a>
        <a
          href="https://www.youtube.com/@agodecosystem"
          target="_blank"
          style="
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            color: #000000;
            text-decoration: underline;
            text-align: center;
            width: 30%;
            display: inline-block;
            cursor: pointer;
          "
        >
          <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle21.png" style="margin-bottom: 10px" />
        </a>
      </p>
      <p style="width: 40%; margin: auto; text-align: center">
        <a
          style="
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            text-align: center;
            color: #000000;
            text-decoration: underline;
            width: 30%;
            display: inline-block;
            cursor: pointer;
          "
        >
          Account
        </a>
        <a
          href="https://agodecosystem.com/"
          target="_blank"
          style="
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            text-align: center;
            text-decoration: underline;
            color: #000000;
            width: 30%;
            display: inline-block;
            cursor: pointer;
          "
        >
          Explore
        </a>
        <a
          href="https://agodecosystem.com/Faq/"
          target="_blank"
          style="
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            color: #000000;
            text-decoration: underline;
            text-align: center;
            width: 30%;
            display: inline-block;
            cursor: pointer;
          "
        >
          FAQ
        </a>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p
        style="
          font-size: 12px;
          line-height: 18px;
          text-align: center;
          color: #303030;
          padding: 20px;
          margin-top: 70px;
        "
      >
        ®️Copyright AGOD Ecosystem 2023 by AGOD Ecosystem S.A. de C.V
        <br />
        <br />

        *Risk warning: The trade of cryptocurrencies, investments and/or
        leverage tokens are subject to high market risks.
        <br />
        AGOD Ecosystem recommends doing your own research and is not
        responsible for any losses. Please make your transactions with
        caution.
        <br />
        <br />
        Kindly note: Please be aware of phishing sites and always make
        sure you are visiting the official AGODEcosystem.com website when
        entering sensitive data.
        <br />
        <br />
        Want to change how you receive these emails? You can update your
        <a href="https://agodecosystem.com/unSubscribePage/?email=${email}" target="_blank" style="color: #000; text-decoration: underline; cursor: pointer;">preferences or unsubscribe</a>
      </p>
    </td>
  </tr>
</tbody>
</table>`;

    let pucahsedTokenEmailHtml = (AgodToken,email)=>{

    return `
    <link
    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
    rel="stylesheet"
    />
    <table
    style="
      max-width: 650px;
      width: 100%;
      margin: auto;
      border-collapse: collapse;
      background-color: white;
    "
  >
    <tbody>
      <tr>
        <td>
          <p
            style="
              text-align: center;
              font-size: 14px;
              color: #000000;
              text-decoration: underline;
              cursor: pointer;
              margin-bottom: 50px;
            "
          >
            THE BRIDGE BETWEEN REAL WORLD <br />
            INVESTMENTS AND BLOCKCHAIN
          </p>
        </td>
      </tr>
      <tr>
        <td
          style="
            background-image: url('https://www.agodecosystem.com/img/emailtemplatesimages/Group-back.png');
            height: 650px;
            width: 650px;
            margin-top: 30px;
            text-align: center;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          "
        >
          <!-- <img src="https://www.agodecosystem.com/img/emailtemplatesimages/logo.png" /> -->
          <p
            style="
              text-align: center;
              color: #000000;
              font-weight: 400;
              margin: 25% 0px 0px;
              letter-spacing: 0.6em;
            "
          >
            THE HEART OF
          </p>
          <p
            style="
              font-size: 30px;
              font-weight: 700;
              text-align: center;
              color: #000000;
              margin: 0px;
              letter-spacing: 0.7em;
            "
          >
            BLOCKCHAIN
          </p>
          <p
            style="
              margin: 60px 0px 0px;
              font-size: 16px;
              font-weight: 400px;
              text-align: center;
              color: #000000;
            "
          >
            You Just Purchased AGOD
          </p>
          <p
            style="
              font-size: 26px;
              font-weight: 700;
              text-align: center;
              color: #000000;
              margin: 0px;
            "
          >
            CONGRATULATIONS!
          </p>
          <img
            src="https://www.agodecosystem.com/img/emailtemplatesimages/AgodIcon.png"
            style="margin-top: 38px"
          />
        </td>
      </tr>
      <tr>
        <td>
          <p
            style="
              font-weight: 700;
              font-size: 23px;
              line-height: 78px;
              color: #000000;
              margin: 0px;
              text-align: center;
            "
          >
            Successfully Purchased
          </p>
          <p
            style="
              font-weight: 400;
              margin: 0px;
              font-size: 18px;
              line-height: 0px;
              color: #000000;
              text-align: center;
            "
          >
          ${AgodToken || 0} AGOD Tokens
          </p>
          <p
            style="
              font-weight: 400;
              margin: 0px;
              font-size: 16px;
              line-height: 30px;
              color: #000000;
              text-align: center;
              margin-top: 15px;
              padding-top: 24px;
            "
          >
            You wll receive a second email <br />
            with the details to get your AGOD <br />
            tokens in your crypto wallet
          </p>
        </td>
      </tr>
      <tr>
        <td style="width: 100%">
          <p
            style="
              background: linear-gradient(
                190.4deg,
                #03c6ba -39.94%,
                rgba(3, 116, 198, 0.09) 93.58%,
                rgba(238, 44, 75, 0) 93.59%,
                #fff 93.59%
              );
              margin: 200px auto;
              width: 80%;
              color: #000000;
              padding: 60px 0px;
              border-radius: 10px;
              max-height: 236px;
            "
          >
            <span
              style="
                font-size: 20px;
                display: block;
                margin: 0px 40px;
                text-align: center;
              "
            >
              By purchasing <b>AGOD Token</b> you became an AGOD’er.
              <br />
              <br />
              <b>HODL</b> and get ready to start earning with the ecosystem’s
              growth
            </span>
            <br />
            <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle7.png" />
          </p>
        </td>
      </tr>
      <tr>
        <td
          style="
            background-image: url(https://www.agodecosystem.com/img/emailtemplatesimages/rightplanta.png);
            width: 640px;
            height: 663px;
            background-repeat: no-repeat;
            text-align: left;
            background-position: bottom;
            vertical-align: baseline;
          "
        >
          <p
            style="
              width: 60%;
              margin-right: auto;
              margin-left: 5%;
              color: #000000;
              font-size: 18px;
              margin-top: 100px;
            "
          >
            <span style="font-weight: 800; font-size: 22px">
              Unlocking Blockchain’s <br />
              Full potential
            </span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p
            style="
              font-weight: 700;
              font-size: 26px;
              line-height: 39px;
              color: #000000;
              text-align: center;
            "
          >
            Check us out
          </p>
        </td>
      </tr>
      <tr>
        <td style="text-align: center">
          <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle23.png" />
        </td>
      </tr>
      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          <p
            style="
              width: 40%;
              margin: auto;
              margin-top: 20px;
              text-align: center;
            "
          >
            <a
              href="https://twitter.com/AgodEcosystem"
              target="_blank"
              style="
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                text-align: center;
                color: #000000;
                text-decoration: underline;
                width: 30%;
                display: inline-block;
                cursor: pointer;
              "
            >
              <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle19.png" style="margin-bottom: 10px" />
            </a>
            <a
              href="https://www.instagram.com/AgodEcosystem/"
              target="_blank"
              style="
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                text-align: center;
                text-decoration: underline;
                color: #000000;
                width: 30%;
                display: inline-block;
                cursor: pointer;
              "
            >
              <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle20.png" style="margin-bottom: 10px" />
            </a>
            <a
              href="https://www.youtube.com/@agodecosystem"
              target="_blank"
              style="
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                color: #000000;
                text-decoration: underline;
                text-align: center;
                width: 30%;
                display: inline-block;
                cursor: pointer;
              "
            >
              <img src="https://www.agodecosystem.com/img/emailtemplatesimages/Rectangle21.png" style="margin-bottom: 10px" />
            </a>
          </p>
          <p style="width: 40%; margin: auto; text-align: center">
            <a
              style="
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                text-align: center;
                color: #000000;
                text-decoration: underline;
                width: 30%;
                display: inline-block;
                cursor: pointer;
              "
            >
              Account
            </a>
            <a
              href="https://agodecosystem.com/"
              target="_blank"
              style="
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                text-align: center;
                text-decoration: underline;
                color: #000000;
                width: 30%;
                display: inline-block;
                cursor: pointer;
              "
            >
              Explore
            </a>
            <a
              href="https://agodecosystem.com/Faq/"
              target="_blank"
              style="
                font-weight: 400;
                font-size: 13px;
                line-height: 20px;
                color: #000000;
                text-decoration: underline;
                text-align: center;
                width: 30%;
                display: inline-block;
                cursor: pointer;
              "
            >
              FAQ
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p
            style="
              font-size: 12px;
              line-height: 18px;
              text-align: center;
              color: #000000;
              padding: 20px;
              margin-top: 70px;
            "
          >
            ®️Copyright AGOD Ecosystem 2023 by AGOD Ecosystem S.A. de C.V
            <br />
            *Risk warning: The trade of cryptocurrencies, investments and/or
            leverage tokens are subject to high market risks. <br />
            AGOD Ecosystem recommends doing your own research and is not
            responsible for any losses. Please make your transactions with
            caution. <br />

            Kindly note: Please be aware of phishing sites and always make
            sure you are visiting the official AGODEcosystem.com website when
            entering sensitive data.<br />

            Want to change how you receive these emails? You can
            <a
              target="_blank"
              href="https://agodecosystem.com/"
              style="text-decoration: underline; color: #000000"
            >
              update your preferences </a
            >or
            <a
              href="https://agodecosystem.com/unSubscribePage/?email=${email}"
              target="_blank"
              style="text-decoration: underline; color: #000000"
            >
              unsubscribe</a
            >
          </p>
        </td>
      </tr>
    </tbody>
  </table>`};
module.exports = {
  getReqData,
  createAndSendEmail,
  EmailHtml,
  pucahsedTokenEmailHtml
};
