import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  return (
   
    
    <div>
       <Link className='Backclass' to='/'>
       Home   /
    </Link>
    <Link className='Backclass' to='/trmsandcdn'>
       TermsAndConditions
    </Link>
      <h1>Terms and Conditions</h1>
      <p>Welcome to Kishan ko bazar wholesale Shop. By accessing or using our website, you agree to be bound by the following terms and conditions:</p>
      <h2>1. Use of Website</h2>
      <p>You may only use this website for lawful purposes and in accordance with these terms and conditions.</p>
      <h2>2. Privacy Policy</h2>
      <p>Your use of this website is also subject to our Privacy Policy, which is incorporated herein by reference.</p>
      <h2>3. Disclaimer</h2>
      <p>This website and all content, products, and services included on or otherwise made available to you through this website are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, materials, products, or services included on or otherwise made available to you through this website.</p>
      <h2>4. Limitation of Liability</h2>
      <p>In no event shall Kishan ko bazar wholesale Shop, its directors, officers, employees, or agents be liable to you or any third party for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of or inability to use this website or the content, products, or services provided on or through this website, whether based on warranty, contract, tort (including negligence), or any other legal theory.</p>
      <h2>5. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless Kishan ko bazar wholesale Shop, its directors, officers, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these terms and conditions or your use of this website, including, but not limited to, any use of the content, products, or services provided on or through this website.</p>
      <h2>6. Governing Law and Jurisdiction</h2>
      <p>These terms and conditions and your use of this website shall be governed by and construed in accordance with the laws of the [insert governing law and jurisdiction]. Any legal suit, action, or proceeding arising out of or related to these terms and conditions or your use of this website shall be instituted exclusively in the federal or state courts located in [insert location], and you hereby consent to the personal jurisdiction of such courts.</p>
      <h2>7. Changes to Terms and Conditions</h2>
      <p>We reserve the right to modify or replace these terms and conditions at any time without notice. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the website.</p>
    </div>
  );
  
};

export default TermsAndConditionsPage;
