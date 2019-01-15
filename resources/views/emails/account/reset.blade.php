@component('mail::smaug')

  <tr>
    <td><table bgcolor="#AF1405" width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td width="30" class="em_hide">&nbsp;</td>
          <td valign="top" class="em_side_space"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              
          <tr>
            <td height="40" style="line-height:1px;font-size:1px;">&nbsp;</td>
           </tr>
         
           <tr>
            <td class="em_dark_grey_txt" style="font-family:'Roboto', Arial, sans-serif;font-size:32px;text-align:center;text-transform:none;color:#ffffff;letter-spacing:0px;font-weight:300;line-height:35px;">

               Password reset
            
            </td>
           </tr>
          
            <tr>
            <td height="50" style="line-height:1px;font-size:1px;">&nbsp;</td>
           </tr>
          
         
            </table></td>
          <td width="30" class="em_hide">&nbsp;</td>
        </tr>
      </table></td>
  </tr>

  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td width="30" class="em_hide">&nbsp;</td>
          <td valign="top" class="em_side_space"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              
          <tr>
            <td height="50" style="line-height:1px;font-size:1px;">&nbsp;</td>
           </tr>
            
           <tr>
            <td class="em_grey_txt" style="font-family:'Roboto', Arial, sans-serif;font-size:15px;text-align:left;padding-left:0px;padding-right:0px;color:#414141;line-height:24px;font-weight:300;">
            
            <span style="font-weight:700;">Dear {{ $user_name }},</span>  <br/><br/>

            You recently requested to reset the password of your account.
            Click the button below in the next **30 minutes** to carry out your changes.

            If you have not issued this request, please inform us about the incident.
            
            </td>
           </tr>
           
            
            <tr>
            <td height="30" style="line-height:1px;font-size:1px;">&nbsp;</td>
           </tr>
           
           <tr>
               <td>
                  @component('mail::button', ['url' => URL::to("/password-reset/$token", [], true)
                  ])
                  Reset your password
                  @endcomponent
               </td>
            </tr>
            
             
            <tr>
            <td height="30" style="line-height:1px;font-size:1px;">&nbsp;</td>
           </tr>
           
            <tr>
            <td class="em_grey_txt" style="font-family:'Roboto', Arial, sans-serif;font-size:15px;text-align:left;padding-left:0px;padding-right:0px;color:#414141;line-height:24px;font-weight:300;">

            Sincerely,  <br/> 
            <i>your smaug</i>

            
            </td>
           </tr>
            
            <tr>
            <td height="50" style="line-height:1px;font-size:1px;">&nbsp;</td>
           </tr>
         
         
            </table></td>
          <td width="30" class="em_hide">&nbsp;</td>
        </tr>
      </table></td>
  </tr>

@endcomponent
