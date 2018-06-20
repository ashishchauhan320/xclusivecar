<?php
/*
 Template Name: Blog
 */
get_header(); 
global $post;
while ( have_posts() ) : the_post();
?>
<?php $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID),'' );  ?>
<section class="inner_banner" style="background-image:url(<?php echo $src[0]; ?>);">
	<div class="container">
				<div class="caption-text">
					<h1 class="wow fadeInDown"><?php the_title(); ?></h1>
				</div>
			</div>
</section>
<?php 
  $i=0;
  $args = array('post_type' => 'post','posts_per_page'=>-1,'order' => 'DESC');
  $loop = new WP_Query( $args );
  if ( $loop->have_posts() ) :
?> 
<section class="blog_section">
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-8">
				<div class="blog-grids">
					<?php 
					  while ( $loop->have_posts() ) : $loop->the_post();
					  $blgsrc = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID),'' ); 
					?>
					<div class="postWrapper">
						<div class="postTitle">
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						</div>
						<div class="blog_dtls">
							<div class="post_by">
								By <?php the_author(); ?> <span class="date1"><?php the_time('d M, Y');?></span>
							</div>
							<!--ul>
								<li><a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> like</a></li>
								<li><a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i> share</a></li>
								<li><a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> comments</a></li>
							</ul-->
						</div>
						<div class="blog-content">
							<a href="<?php the_permalink(); ?>"><figure style="background-image: url(<?php echo $blgsrc[0]; ?>);"></figure></a>
							<?php echo content(30);?>
							<a class="blog-read-more" href="<?php the_permalink(); ?>">Read More</a>
						</div>
					</div>
					<?php 
						endwhile;
						wp_reset_query();
					?>
				</div>
			</div>
			<?php 
				$recentargs = array('post_type' => 'post','posts_per_page'=>3,'order' => 'DESC');
				$recent = new WP_Query( $recentargs );
				if ( $recent->have_posts() ) :
			?>
			<div class="col-lg-3 col-md-4">
				<aside class="side-bar">
					<div class="srch_bar">
						<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
								<input type="text" placeholder="Search.." name="s" id="s" value="<?php echo get_search_query(); ?>" required>
								<button><i class="fa fa-search"></i></button> 
						</form>
					</div>
					<div class="recent-posts">
						<h2>Recent Posts</h2>
						<?php 
						  while ( $recent->have_posts() ) : $recent->the_post();
						  $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID),'' ); 
						?>
						<div class="recent-single-post">
							<a href="<?php the_permalink(); ?>" class="recent-singleimage" style="background-image: url(<?php echo $src[0]; ?>);"></a>
							<div class="recent-singlecontent">
								<a href="<?php the_permalink(); ?>" class="recent-singletitle"><?php the_title(); ?></a>
								<?php echo content(10);?>
							</div>
						</div>
						<?php 
							endwhile;
							wp_reset_query();
						?>
					</div>
					<div class="recent-posts">
						<h2>Archive</h2>
						<ul>
						<?php 
							$args = array(
								'type'            => 'monthly',
								'limit'           => '',
								'format'          => 'html', 
								'before'          => '',
								'after'           => '',
								'show_post_count' => false,
								'echo'            => 1,
								'order'           => 'DESC',
									'post_type'     => 'post'
							);
							$archive = wp_get_archives( $args ); 
						?>
						</ul>
					</div>
				</aside>
			</div>
			<?php endif; ?>
		</div>
	</div>
</section>
<?php endif; ?>
<?php 
endwhile;
wp_reset_query();	
get_footer(); ?> 