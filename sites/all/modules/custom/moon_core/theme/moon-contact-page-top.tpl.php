<?php if ($tel_1) : ?>
  <?php if ($is_mobile) : ?>
    <span class="contact-top-phone" itemprop="telephone"><a href="tel:<?php print str_replace(" ", "", $tel_1); ?>"><?php print $tel_1; ?></a></span>
  <?php else: ?>
    <span class="contact-top-phone" itemprop="telephone"><?php print $tel_1; ?></span>    
  <?php endif; ?>
<?php endif; ?>

<?php if ($tel_2) : ?>
  <?php if ($is_mobile) : ?>
    <span itemprop="telephone"><a href="tel:<?php print str_replace(" ", "", $tel_2); ?>"><?php print $tel_2; ?></a></span>
  <?php else: ?>
    <span class="contact-top-phone" itemprop="telephone"><?php print $tel_2; ?></span>    
  <?php endif; ?>
<?php endif; ?>

<?php if ($email) : ?>
  <a href="mailto:<?php print $email; ?>"><?php print $email; ?></a>
<?php endif; ?>
