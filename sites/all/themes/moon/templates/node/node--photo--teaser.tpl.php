<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
#dsm(get_defined_vars());
?>
<a href="<?php print $node_url; ?>" class="article node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>


    <div class="initial-content">
      <?php print render($content['field_image_multiple']); ?>
    </div>

    <div class="hidden after-hover-content">
      <span class="teaser-title"><?php print $title; ?></span>
      <?php print render($content['field_headline']); ?>
    </div>


    <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    //print render($content);
    ?>
  </a>
