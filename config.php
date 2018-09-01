<?php
require_once('../../../Users/tizzy/OneDrive/Desktop/vendor/autoload.php');
$stripe = array(
  secret_key      => "sk_live_cpfa6V7Tlkq6eqxWmlJgB4ZF",
  publishable_key => "pk_live_fKxcCBXZrzzgIocFUsrF2MlB"
);
\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>