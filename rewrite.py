import re

with open('index.html', 'r') as f:
    content = f.read()

# We want to replace everything between <div class="design-system-container" style="position: relative;">
# and <!-- SECTION 8 — POSTER FOOTER -->

start_marker = '<div class="design-system-container" style="position: relative;">'
end_marker = '    </div>\n\n    <!-- SECTION 8 — POSTER FOOTER -->'

start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker)

new_html = """
      
      <!-- SECTION 1 — HERO -->
      <section id="hero" class="section-wrapper">
        <div class="split-layout-hero">
          <div style="z-index: 2;">
            <div class="sticker blue" style="transform: rotate(-5deg); margin-bottom: var(--spacing-sm);">NEW ERA OF SPONSORSHIPS</div>
            <h1 class="hero-title" style="text-align: left; font-size: clamp(3.5rem, 8vw, 6rem); margin-bottom: var(--spacing-sm);">THE INTERNET HAS<br/>ENOUGH BORING ADS.</h1>
            <p class="editorial" style="font-size: 1.5rem; max-width: 500px; margin-bottom: var(--spacing-md);">
              Clouterry exists to connect brands with creators who make ads feel like actual content. Because people don't hate ads, they hate bad ads.
            </p>
            <div style="display: flex; gap: var(--spacing-sm);">
              <a href="/creators" class="magnetic-btn red">I'M A CREATOR</a>
              <a href="/brands" class="magnetic-btn blue">I'M A BRAND</a>
            </div>
            <div style="margin-top: var(--spacing-md); display: flex; align-items: center; gap: var(--spacing-sm); opacity: 0.8;">
              <span class="retro" style="font-size: 0.9rem;">TRUSTED BY:</span>
              <span class="editorial" style="font-weight: bold;">Top tier creators & agencies</span>
            </div>
          </div>
          
          <div class="image-collage-container">
            <div class="orbit-ring mascot-float" style="width: 400px; height: 400px; top: 10%; left: 10%; opacity: 0.2;"></div>
            
            <div class="image-card scrapbook-item-1" style="width: 280px; top: 0; left: 10%; transform: rotate(-8deg);">
              <img src="/public/images/creator_hero_1_1783489029898.png" alt="Creator in studio">
              <div class="image-card-caption">Studio vibes</div>
            </div>
            
            <div class="image-card scrapbook-item-2" style="width: 250px; bottom: 5%; right: 10%; transform: rotate(5deg);">
              <img src="/public/images/creator_hero_2_1783489041549.png" alt="Creator laughing">
              <div class="image-card-caption">Laugh always</div>
            </div>
            
            <svg class="doodle doodle-red" style="position: absolute; top: 40%; left: -5%; width: 60px;" viewBox="0 0 100 100">
               <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke-width="4"/>
            </svg>
            <div class="stamp-red" style="position: absolute; bottom: 20%; left: 0; transform: rotate(-15deg); z-index: 35;">OPEN FOR COLLABS</div>
          </div>
        </div>
      </section>

      <div class="orbit-divider"></div>

      <!-- SECTION 2 — WHY CLOUTERRY EXISTS -->
      <section id="story" class="section-wrapper">
        <div class="split-layout-hero">
          <div class="image-collage-container" style="min-height: 400px;">
            <div class="image-card scrapbook-item-center" style="width: 300px; top: 5%; left: 15%; transform: rotate(-3deg);">
              <img src="/public/images/founder_portrait_1783489052939.png" alt="Founder portrait">
              <div class="image-card-caption">Meet Alex, Founder</div>
            </div>
            <div class="card-polaroid" style="position: absolute; bottom: 0; right: 20%; transform: rotate(10deg); width: 180px;">
              <svg viewBox="0 0 150 100" style="width: 100%; background: var(--color-paper); border: var(--border-medium);">
                 <path d="M20,50 Q20,20 75,20 Q130,20 130,50 Q130,80 75,80 Q20,80 20,50" fill="white" stroke="var(--color-ink)" stroke-width="3"/>
                 <text x="35" y="45" font-family="var(--font-handwritten)" font-size="12">There has to</text>
                 <text x="35" y="60" font-family="var(--font-handwritten)" font-size="12">be a better way.</text>
              </svg>
              <div class="polaroid-caption">Thinking...</div>
            </div>
          </div>
          
          <div>
            <h2 class="section-title">Why We Exist</h2>
            <p class="editorial" style="font-size: 1.3rem; margin-bottom: var(--spacing-sm);">
              We were tired of seeing the same creators reading the same scripts for the same corporate ads. It was boring. It was skip-able.
            </p>
            <p class="editorial" style="font-size: 1.3rem;">
              Clouterry was built as a creative studio first. We curate creators who care about their craft, and pair them with brands brave enough to let them be authentic.
            </p>
            <div class="handwritten doodle-red" style="margin-top: var(--spacing-sm); font-size: 1.8rem;">No more boring ads!</div>
          </div>
        </div>
      </section>

      <!-- SECTION 3 — CREATOR SPOTLIGHT -->
      <section id="spotlight" class="section-wrapper" style="background-color: white; padding: var(--spacing-lg); border: var(--border-thick); border-radius: var(--radius-scrapbook); box-shadow: var(--shadow-hard);">
        <h2 class="section-title">Creator Spotlight</h2>
        <p class="editorial">Our orbit is filled with different archetypes. Which one are you?</p>
        
        <div class="editorial-grid">
          <!-- Card 1 -->
          <div class="card-comic-panel" style="transform: rotate(-2deg);">
            <div style="height: 200px; background: var(--color-accent-yellow); border: var(--border-medium); margin-bottom: var(--spacing-xs); display: flex; align-items: center; justify-content: center;">
              <h1 style="font-size: 4rem; margin: 0;">🎥</h1>
            </div>
            <h3 style="margin-bottom: 5px;">The Storyteller</h3>
            <p class="editorial" style="font-size: 1rem;">Cinematic shots, compelling narratives. Makes a 60-second ad feel like a short film.</p>
          </div>
          <!-- Card 2 -->
          <div class="card-comic-panel" style="transform: rotate(1deg);">
            <div style="height: 200px; background: var(--color-accent-red); border: var(--border-medium); margin-bottom: var(--spacing-xs); display: flex; align-items: center; justify-content: center;">
              <h1 style="font-size: 4rem; margin: 0;">🎙️</h1>
            </div>
            <h3 style="margin-bottom: 5px;">The Personality</h3>
            <p class="editorial" style="font-size: 1rem;">High energy, relatable, hilarious. Sells the product by making you laugh first.</p>
          </div>
          <!-- Card 3 -->
          <div class="card-comic-panel" style="transform: rotate(-1deg);">
            <div style="height: 200px; background: var(--color-accent-blue); border: var(--border-medium); margin-bottom: var(--spacing-xs); display: flex; align-items: center; justify-content: center;">
              <h1 style="font-size: 4rem; margin: 0;">🎨</h1>
            </div>
            <h3 style="margin-bottom: 5px;">The Artist</h3>
            <p class="editorial" style="font-size: 1rem;">Aesthetic, visual-first, meticulous. Seamlessly integrates brands into their canvas.</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: var(--spacing-md);">
          <a href="/creators" class="magnetic-btn">SEE ALL CREATORS</a>
        </div>
      </section>

      <div class="orbit-divider"></div>

      <!-- SECTION 4 — BETTER ADS WIN -->
      <section id="brands" class="section-wrapper">
        <div class="split-layout-hero">
          <div>
            <h2 class="section-title">Better Ads Win</h2>
            <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1; margin-bottom: var(--spacing-sm);">PEOPLE DON'T HATE ADS. <br/>THEY HATE BAD ADS.</h1>
            <p class="editorial" style="font-size: 1.3rem; margin-bottom: var(--spacing-md);">
              The right creator can make a sponsorship feel natural, entertaining, and worth watching. We help brands discover creators who already know how to do that.
            </p>
            <a href="/brands" class="magnetic-btn blue">FIND CREATORS</a>
          </div>
          
          <div class="image-collage-container" style="min-height: 450px;">
            <div class="image-card" style="width: 100%; top: 0; left: 0; transform: rotate(2deg);">
              <img src="/public/images/better_ad_brand_1783489063362.png" alt="Premium brand product shot">
              <div class="image-card-caption">High-end integrations</div>
            </div>
            <div class="sticker red" style="position: absolute; bottom: -20px; right: 20px; font-size: 1.5rem; z-index: 35;">WATCHED.</div>
            
            <svg class="mascot-float" style="position: absolute; top: -30px; right: -30px; width: 100px; height: 100px; z-index: 40;" viewBox="0 0 100 100">
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="var(--color-accent-yellow)" stroke-width="4" transform="rotate(-20 50 50)"/>
              <circle cx="50" cy="50" r="30" fill="var(--color-accent-red)" stroke="var(--color-ink)" stroke-width="3"/>
              <g class="mascot-eyes"><circle cx="40" cy="45" r="4" fill="var(--color-ink)"/><circle cx="60" cy="45" r="4" fill="var(--color-ink)"/></g>
              <path d="M42,55 Q50,65 58,55" fill="none" stroke="var(--color-ink)" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — HOW IT WORKS -->
      <section class="section-wrapper" style="margin-top: var(--spacing-xl);">
        <h2 class="section-title">How It Works</h2>
        <div class="card-system-horizontal">
          <!-- Step 1 -->
          <div class="card-polaroid" style="transform: rotate(-2deg);">
            <div style="height: 120px; background: var(--color-accent-yellow); border: var(--border-medium); display: flex; align-items: center; justify-content: center;">
              <h1 style="font-size: 3rem; margin:0;">1</h1>
            </div>
            <h3 style="margin-top: 0.5rem; font-size: 1.2rem;">Join Orbit</h3>
            <p class="editorial" style="font-size: 0.9rem;">Creator joins our curated network.</p>
          </div>
          <!-- Step 2 -->
          <div class="card-polaroid" style="transform: rotate(2deg);">
            <div style="height: 120px; background: var(--color-accent-blue); border: var(--border-medium); display: flex; align-items: center; justify-content: center; color: white;">
              <h1 style="font-size: 3rem; margin:0;">2</h1>
            </div>
            <h3 style="margin-top: 0.5rem; font-size: 1.2rem;">Brand Brief</h3>
            <p class="editorial" style="font-size: 0.9rem;">Brand submits an open creative brief.</p>
          </div>
          <!-- Step 3 -->
          <div class="card-polaroid" style="transform: rotate(-1deg);">
            <div style="height: 120px; background: var(--color-accent-red); border: var(--border-medium); display: flex; align-items: center; justify-content: center; color: white;">
              <h1 style="font-size: 3rem; margin:0;">3</h1>
            </div>
            <h3 style="margin-top: 0.5rem; font-size: 1.2rem;">The Match</h3>
            <p class="editorial" style="font-size: 0.9rem;">We pair the perfect creator.</p>
          </div>
          <!-- Step 4 -->
          <div class="card-polaroid" style="transform: rotate(1deg);">
            <div style="height: 120px; background: #fff; border: var(--border-medium); display: flex; align-items: center; justify-content: center;">
              <svg width="60" height="60" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="var(--color-accent-yellow)"/><polygon points="40,30 40,70 70,50" fill="var(--color-ink)"/></svg>
            </div>
            <h3 style="margin-top: 0.5rem; font-size: 1.2rem;">Content Live</h3>
            <p class="editorial" style="font-size: 0.9rem;">Authentic, un-boring ad goes live.</p>
          </div>
          <!-- Step 5 -->
          <div class="card-polaroid" style="transform: rotate(-3deg);">
            <div style="height: 120px; background: var(--color-accent-green); border: var(--border-medium); display: flex; align-items: center; justify-content: center; color: var(--color-ink);">
              <h1 style="font-size: 2.5rem; margin:0;">WIN</h1>
            </div>
            <h3 style="margin-top: 0.5rem; font-size: 1.2rem;">Everyone Wins</h3>
            <p class="editorial" style="font-size: 0.9rem;">Brand gets views, Creator gets paid.</p>
            <div class="sticker" style="position: absolute; top: -10px; right: -10px; font-size: 0.8rem;">APPROVED</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — INSIDE ORBIT -->
      <section class="section-wrapper">
        <h2 class="section-title">Inside The Orbit</h2>
        <div class="editorial-grid">
          <div class="card-comic-panel" style="background-color: var(--color-accent-yellow);">
            <h3 style="font-size: 1.5rem;">Community</h3>
            <p class="editorial">A private Discord for approved creators to share rates, tips, and collab.</p>
            <div class="handwritten" style="margin-top: 1rem;">Invite Only</div>
          </div>
          <div class="card-comic-panel" style="background-color: var(--color-paper);">
            <h3 style="font-size: 1.5rem;">Creator Wall</h3>
            <p class="editorial">Weekly features highlighting the most creative integrations.</p>
            <div class="stamp-red" style="margin-top: 1rem; display: inline-block;">FEATURED</div>
          </div>
          <div class="card-comic-panel" style="background-color: var(--color-accent-blue); color: white;">
            <h3 style="font-size: 1.5rem;">Future Board</h3>
            <p class="editorial" style="color: white;">Upcoming campaigns and early access to brand deals.</p>
            <div class="handwritten" style="margin-top: 1rem; color: var(--color-accent-yellow);">Loading...</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7 — JOIN CLOUTERRY -->
      <section id="join" class="section-wrapper" style="margin-bottom: var(--spacing-xl);">
        <div class="split-layout-hero" style="background: white; border: var(--border-thick); padding: var(--spacing-lg); border-radius: var(--radius-scrapbook); box-shadow: var(--shadow-hard);">
          <div>
            <h2 style="font-size: clamp(2.5rem, 6vw, 4rem); line-height: 1; margin-bottom: var(--spacing-sm);">READY TO FIX <br/>ADVERTISING?</h2>
            <p class="editorial" style="font-size: 1.3rem; margin-bottom: var(--spacing-md);">
              Whether you are a creator looking to get paid for making good content, or a brand tired of being skipped. The club is open.
            </p>
            <div class="sticker" style="transform: rotate(5deg);">NO WEIRD CONTRACTS</div>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
            <div class="card-comic-panel" style="background-color: var(--color-accent-yellow); margin-bottom: 0;">
              <h3>For Creators</h3>
              <p class="editorial" style="margin-bottom: 1rem;">If people enjoy watching you, we want to know you.</p>
              <a href="/creators" class="magnetic-btn red">I'M A CREATOR</a>
            </div>
            
            <div class="card-comic-panel" style="background-color: var(--color-accent-blue); color: white; margin-bottom: 0;">
              <h3>For Brands</h3>
              <p class="editorial" style="margin-bottom: 1rem; color: white;">Connect with creators who know how to make your brand watchable.</p>
              <a href="/brands" class="magnetic-btn" style="color: var(--color-ink);">LET'S FIND YOUR PEOPLE</a>
            </div>
          </div>
        </div>
      </section>
"""

new_file_content = content[:start_idx] + new_html + "\n" + content[end_idx:]

with open('index.html', 'w') as f:
    f.write(new_file_content)

print("index.html rewritten successfully")
