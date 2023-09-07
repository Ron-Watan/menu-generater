import React from 'react'
import Sect00Navigation from './_00Navigation'
import '../componenthome/termPolicyStyle.css';
import { Link } from "react-router-dom";

function _06Policy() {
  return (
    <div className='H-body'>
      <Sect00Navigation NavBtnRight={'Home'} />

      <div className="tempSpace"></div>

      <main className="TermPolicySection">
        <div className="">

          <div className="termTitle margin_bottom1">Privacy policy</div>

          <div className="termSmall margin_bottom1"> Effective Date: August 20, 2023</div>

          <div className="termContent margin_bottomDot5">Hello and welcome to QR-Cloudmenu’s Privacy policy!</div>


          <div className="termSubject margin_bottomDot5">Description of Data</div>
          <div className="termContent margin_bottom15">
            <strong>Visitors</strong> (i.e. the users who visit https://www.qr-cloudmenu.com (“QR-Cloudmenu”) and read the menus https://www.qr-cloudmenu.com/(restaurant name) (“QR-Cloudmenu’s Sub-Directory”)
          </div>
          <div className="termContent margin_bottom15">
            <strong>User</strong> (i.e. the customers that sign up to  https://www.qr-cloudmenu.com (“Smart Menu Builder Web-App.”)
            in order to publish a menu)</div>

          <div className="termContent margin_bottom15">
            <strong>Log Files</strong> QR-Cloudmenu follows a standard procedure of using log files. These files log visitors
            when they visit websites. All hosting companies do this as part of hosting services'
            analytics. The information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable. The purpose of the information
            is for analyzing trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.

          </div>
          <div className="termContent margin_bottom2">
            These trackers are used for activities that are strictly necessary to operate or deliver the service you
            requested from us and, therefore, do not require you to consent.
          </div>


          <div className="termSubject margin_bottomDot5">Personal Data We Collect for the QR-Cloudmenu Service</div>
          <div className="termContent margin_bottom2">
            <strong>Visitors</strong> : If you do not sign up for the QR-Cloudmenu Service , then we do not collect any of the following personal data or personal information.
          </div>

          <div className="termSubject margin_bottomDot5">Personal Data We Collect for User to access Smart Menu Builder Web-App.</div>
          <div className="termContent margin_bottomDot5">
            This notice applies to personal data submitted and collected upon your consent when
            you sign up for the Smart Menu Builder Web-App. If you do not sign up for the Smart Menu Builder Web-App., then we do not collect any of the following personal data or personal information.

          </div>
          <div className="termContent margin_bottom2">
            <div className="">&bull; Email address</div>
            <div className="">&bull; Last 4 of Credit/Debit card and postal code for billing</div>
            <div className="">&bull; Your name and Your Address for invoice infomation</div>

          </div>


          <div className="termSubject margin_bottomDot5">How We Use Your Personal Information for Smart Menu Builder Web-App.</div>
          <div className="termContent margin_bottom2">
            We use the personal information you provide about yourself during Smart Menu Builder Web-App. signup and login
            to verify your eligibility for the Smart Menu Builder Web-App., to provide customer service during the
            term of your service, for billing and payment for the service, and to advise you of changes to our service, or new services that we may implement from time to time.
          </div>

          <div className="termSubject margin_bottomDot5">Credit Card Information</div>
          <div className="termContent margin_bottom2">
            We use Stripe for payment
            processing. Stripe encrypts your credit card information in their database and is
            PCI and GDPR compliant, so you can feel good about how they secure your information.
            Stripe provides to us the last 4 digits of your credit card only so you can later
            identify which credit card you are using within our service.
          </div>

          <div className="termSubject margin_bottomDot5">Information Collected Automatically</div>
          <div className="termContent margin_bottom2">
            We may also receive or collect certain technical and anonymized analytic information
            when you use our website, such as the internet protocol (“IP”) address of your computer,
            the IP address of your internet service provider, mobile device ID, the date and time you
            access our website or service, the IP address or URL of the website from which you linked
            directly to our website, the operating system you are using, the Internet browser you are using,
            the sections of the website you visit, the website pages read, images viewed,
            or other content that you may access from the Smart Menu Builder Web-App.
            This information is stored in logs, contains no personal data collected by the Smart Menu Builder Web-App.,
            and is only stored on a temporary basis to assist with customer support and crash reporting and will not be shared with anyone outside unless required by law.
          </div>

          <div className="termSubject margin_bottomDot5">Will you ever share my email address?</div>
          <div className="termContent margin_bottom2">
            We will never sell, rent, share, trade, or otherwise transfer any of your personal
            information, including your email address, to any outside third party unless we are
            required by law to do so. We may occasionally contact you via email with product
            updates that we feel will improve your experience with the Smart Menu Builder Web-App.
            These emails will always include a prominent, and effective, unsubscribe link.
          </div>

          <div className="termSubject margin_bottomDot5">Securing Your Information</div>
          <div className="termContent margin_bottom2">
            We use AWS (Amazon Web Service) to safeguard personal information to ensure that such information
            is kept private. However, unauthorized entry or use, hardware or software failure,
            the inherent insecurity of the Internet and other factors, may compromise the security
            of your personal information at any time. Therefore we cannot guarantee the security
            of your personal information.
          </div>

          <div className="termSubject margin_bottomDot5">International Users</div>

          <div className="termContent margin_bottom2">
            If you are located outside of the United States, please note that the Smart Menu Builder Web-App.
            is hosted in the United States. Therefore, your information may be processed and
            stored in the United States. As a result, United States federal and state governments,
            courts, or law enforcement or regulatory agencies may be able to obtain disclosure
            of your information through laws applicable in the United States. Your use of this
            service or your submission of any personal information to us will constitute your
            consent to the transfer of your personal information outside of your home country,
            including the United States, which may provide for different data protection rules
            than in your country.
          </div>
          <div className="termSubject margin_bottomDot5">Children and Minors</div>

          <div className="termContent margin_bottom2">
            The Smart Menu Builder Web-App. is not intended for use by minors under the age of 13.
            We do not knowingly solicit any information from such minors. If you are a parent or
            legal guardian who discovers that your child has provided us with information without
            your consent, you may notify us at our company contact page and request that we
            permanently remove such information from our database.
          </div>

          <div className="termSubject margin_bottomDot5">Contact us</div>

          <div className="termContent margin_bottom15">
            For more information about our privacy practices, if you have questions,
            or if you would like to make a complaint, please contact us by using the
            contact button at the bottom of your screen or by mail using the details provided below:
          </div>

          <div className="termContent margin_bottom2">
            customercare@qr-cloudmenu.com
          </div>
        </div>

        <div id='feature9' className="featureLink"></div>
        <div className="H_MaxWidth">
          <div className="H_ContWidth">
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 QR-Clould Menu. All rights reserved.
            </p>

            <div className="endSection">
              <Link to='/termCondition' className="">Term of Service </Link>
              <Link to='/policy' className="">Privacy Policy</Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default _06Policy