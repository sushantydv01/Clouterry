import os

# 1. Update components.css
css_path = 'src/css/components.css'
with open(css_path, 'a') as f:
    f.write("""
/* --- BENTO & EDITORIAL LAYOUT CLASSES --- */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.bento-grid-asym {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-rows: minmax(400px, auto);
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}
.bento-grid-asym.reverse {
  grid-template-columns: 1fr 1.5fr;
}

.bento-card {
  background-color: white;
  border-radius: 32px;
  padding: var(--spacing-lg);
  border: var(--border-thick);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 0px 0px var(--color-ink);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.bento-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px 0px var(--color-ink);
}

.bento-card.dark { background-color: var(--color-ink); color: white; }
.bento-card.red { background-color: var(--color-accent-red); color: white; }
.bento-card.yellow { background-color: var(--color-accent-yellow); color: var(--color-ink); }
.bento-card.blue { background-color: var(--color-accent-blue); color: white; }
.bento-card.green { background-color: var(--color-accent-green); color: var(--color-ink); }
.bento-card.paper { background-color: var(--color-paper); color: var(--color-ink); }

.bento-card-image-full {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  z-index: 0;
}

.bento-card-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.massive-text {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.85;
  text-transform: uppercase;
  margin: 0;
}

.bento-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (max-width: 768px) {
  .bento-grid-asym, .bento-grid-asym.reverse, .bento-split {
    grid-template-columns: 1fr;
  }
  .bento-card {
    padding: var(--spacing-md);
    border-radius: 24px;
    min-height: 300px;
  }
}
""")

# 2. Update index.html
html_path = 'index.html'
with open(html_path, 'r') as f:
    content = f.read()

start_marker = '<div class="design-system-container" style="position: relative;">'
end_marker = '    <!-- SECTION 8 — POSTER FOOTER -->'

start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker)

new_html = """
      
      <!-- SECTION 1 — HERO -->
      <section id="hero" class="section-wrapper" style="padding-top: var(--spacing-xl);">
        <div class="bento-split">
          <div style="z-index: 2;">
            <h1 class="massive-text" style="color: var(--color-ink); margin-bottom: var(--spacing-sm);">CREATORS<br/>MAKE<br/>CULTURE.</h1>
            <h1 class="massive-text" style="color: var(--color-accent-red); margin-bottom: var(--spacing-md);">BRANDS<br/>JUST<br/>RENT IT.</h1>
            <p class="editorial" style="font-size: 1.5rem; max-width: 500px; margin-bottom: var(--spacing-lg);">
              A curated network of creators who make ads feel like actual content, and the brands brave enough to let them.
            </p>
            <div style="display: flex; gap: var(--spacing-sm); flex-wrap: wrap;">
              <a href="/creators" class="magnetic-btn red" style="border-radius: 12px;">JOIN AS CREATOR</a>
              <a href="/brands" class="magnetic-btn blue" style="border-radius: 12px;">WORK WITH CREATORS</a>
            </div>
          </div>
          
          <div class="image-collage-container" style="height: 600px;">
            <!-- Clean editorial collage -->
            <div class="bento-card" style="position: absolute; width: 60%; height: 60%; top: 0; right: 0; padding: 0; transform: rotate(2deg);">
              <img src="/public/images/creator_hero_1_1783489029898.png" class="bento-card-image-full" alt="Creator">
            </div>
            <div class="bento-card" style="position: absolute; width: 55%; height: 55%; bottom: 10%; left: 0; padding: 0; transform: rotate(-2deg); z-index: 2;">
              <img src="/public/images/creator_hero_2_1783489041549.png" class="bento-card-image-full" alt="Creator">
            </div>
            <div class="sticker yellow" style="position: absolute; bottom: 5%; right: 10%; z-index: 3; font-size: 1.5rem; transform: rotate(-10deg);">NO BORING ADS</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — WHY CLOUTERRY EXISTS -->
      <section id="story" class="section-wrapper">
        <div class="bento-grid-asym reverse">
          <div class="bento-card paper" style="padding: 0;">
            <img src="/public/images/founder_portrait_1783489052939.png" class="bento-card-image-full" alt="Founder">
          </div>
          
          <div class="bento-card yellow" style="justify-content: center;">
            <h2 class="massive-text" style="font-size: clamp(3rem, 6vw, 5rem); margin-bottom: var(--spacing-md);">THE INTERNET<br/>HAS ENOUGH<br/>BORING ADS.</h2>
            <p class="editorial" style="font-size: 1.4rem; max-width: 90%;">
              We were tired of seeing the same creators reading the same scripts for the same corporate products. It was boring. It was skip-able.
            </p>
            <div class="handwritten doodle-red" style="position: absolute; top: 10%; right: 5%; font-size: 2rem;">Skip!</div>
          </div>
        </div>
      </section>

      <!-- SECTION 3 — CREATOR TYPES -->
      <section id="spotlight" class="section-wrapper">
        <h2 class="massive-text" style="font-size: clamp(3rem, 5vw, 4rem); margin-bottom: var(--spacing-sm);">NOT JUST INFLUENCERS.</h2>
        <p class="editorial" style="font-size: 1.5rem;">Our network is curated for actual creative talent.</p>
        
        <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
          <!-- Card 1 -->
          <div class="bento-card">
            <div style="height: 250px; background: var(--color-paper); border-radius: 16px; margin-bottom: var(--spacing-md); overflow: hidden; position: relative; border: var(--border-medium);">
               <img src="/public/images/creator_hero_1_1783489029898.png" class="bento-card-image-full" alt="Storyteller">
            </div>
            <h3 style="font-size: 2rem; margin-bottom: 10px;">Storytellers</h3>
            <p class="editorial">Cinematic shots, compelling narratives. Makes a 60-second ad feel like a short film.</p>
          </div>
          <!-- Card 2 -->
          <div class="bento-card">
            <div style="height: 250px; background: var(--color-paper); border-radius: 16px; margin-bottom: var(--spacing-md); overflow: hidden; position: relative; border: var(--border-medium);">
               <img src="/public/images/creator_hero_2_1783489041549.png" class="bento-card-image-full" alt="Personality">
            </div>
            <h3 style="font-size: 2rem; margin-bottom: 10px;">Personalities</h3>
            <p class="editorial">High energy, relatable, hilarious. Sells the product by making you laugh first.</p>
          </div>
          <!-- Card 3 -->
          <div class="bento-card">
            <div style="height: 250px; background: var(--color-accent-blue); border-radius: 16px; margin-bottom: var(--spacing-md); overflow: hidden; position: relative; border: var(--border-medium); display: flex; align-items: center; justify-content: center; color: white;">
               <h1 style="font-size: 5rem; margin: 0;">🎨</h1>
            </div>
            <h3 style="font-size: 2rem; margin-bottom: 10px;">Experts</h3>
            <p class="editorial">Aesthetic, visual-first, meticulous. Seamlessly integrates brands into their canvas.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 4 — BETTER ADS WIN -->
      <section id="brands" class="section-wrapper">
        <div class="bento-card dark" style="padding: var(--spacing-xl); text-align: center;">
          <h1 class="massive-text" style="color: var(--color-accent-yellow); margin-bottom: var(--spacing-xl);">PEOPLE SKIP ADS.<br/>PEOPLE WATCH STORIES.</h1>
          
          <div class="bento-split" style="gap: var(--spacing-lg);">
            <!-- Boring Ad -->
            <div class="bento-card" style="background-color: #333; border-color: #555; box-shadow: none;">
              <h3 style="color: #888; margin-bottom: var(--spacing-sm);">BORING AD</h3>
              <div style="height: 200px; background-color: #444; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #666; font-family: var(--font-retro);">[ CORPORATE B-ROLL ]</div>
            </div>
            
            <!-- Watchable Content -->
            <div class="bento-card red">
              <h3 style="color: white; margin-bottom: var(--spacing-sm);">WATCHABLE CONTENT</h3>
              <div style="height: 200px; border-radius: 16px; overflow: hidden; position: relative; border: 2px solid white;">
                <img src="/public/images/better_ad_brand_1783489063362.png" class="bento-card-image-full" alt="Vibrant Content">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — HOW IT WORKS -->
      <section class="section-wrapper">
        <h2 class="massive-text" style="font-size: clamp(3rem, 5vw, 4rem); margin-bottom: var(--spacing-sm);">HOW IT WORKS.</h2>
        <div class="card-system-horizontal" style="padding: var(--spacing-md) 0;">
          <!-- Step 1 -->
          <div class="bento-card yellow" style="width: 300px; flex: 0 0 auto;">
            <h1 class="massive-text" style="font-size: 4rem;">01</h1>
            <h3 style="margin-top: auto; font-size: 1.5rem;">Join Clouterry</h3>
            <p class="editorial">Creator joins our curated network.</p>
          </div>
          <!-- Step 2 -->
          <div class="bento-card blue" style="width: 300px; flex: 0 0 auto;">
            <h1 class="massive-text" style="font-size: 4rem;">02</h1>
            <h3 style="margin-top: auto; font-size: 1.5rem;">Get Matched</h3>
            <p class="editorial">Brand submits an open creative brief.</p>
          </div>
          <!-- Step 3 -->
          <div class="bento-card red" style="width: 300px; flex: 0 0 auto;">
            <h1 class="massive-text" style="font-size: 4rem;">03</h1>
            <h3 style="margin-top: auto; font-size: 1.5rem;">Create Naturally</h3>
            <p class="editorial">We pair the perfect creator.</p>
          </div>
          <!-- Step 4 -->
          <div class="bento-card paper" style="width: 300px; flex: 0 0 auto;">
            <h1 class="massive-text" style="font-size: 4rem;">04</h1>
            <h3 style="margin-top: auto; font-size: 1.5rem;">Launch</h3>
            <p class="editorial">Authentic, un-boring ad goes live.</p>
          </div>
          <!-- Step 5 -->
          <div class="bento-card green" style="width: 300px; flex: 0 0 auto;">
            <h1 class="massive-text" style="font-size: 4rem;">05</h1>
            <h3 style="margin-top: auto; font-size: 1.5rem;">Get Paid</h3>
            <p class="editorial">Brand gets views, Creator gets paid.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — INSIDE ORBIT -->
      <section class="section-wrapper">
        <h2 class="massive-text" style="font-size: clamp(3rem, 5vw, 4rem); margin-bottom: var(--spacing-sm);">INSIDE THE ORBIT.</h2>
        <div class="bento-grid-asym">
          <div class="bento-card yellow">
            <div class="bento-card-content">
              <h3 style="font-size: 2.5rem; margin-bottom: var(--spacing-sm);">Creator Community</h3>
              <p class="editorial" style="font-size: 1.3rem;">A private Discord for approved creators to share rates, tips, and collab.</p>
              <div style="margin-top: auto;">
                <span class="sticker" style="transform: rotate(-5deg);">Invite Only</span>
              </div>
            </div>
          </div>
          
          <div class="bento-card paper" style="padding: 0;">
            <div class="bento-card-content" style="padding: var(--spacing-lg);">
              <h3 style="font-size: 2.5rem; margin-bottom: var(--spacing-sm);">Creator Wall</h3>
              <p class="editorial" style="font-size: 1.3rem;">Weekly features highlighting the most creative integrations.</p>
            </div>
            <!-- Minimal abstract graphic for Creator Wall -->
            <div style="flex: 1; background: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><circle cx=%2220%22 cy=%2220%22 r=%222%22 fill=%22%23ccc%22/></svg>') repeat;"></div>
          </div>
          
          <div class="bento-card blue" style="grid-column: 1 / -1; display: flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--spacing-md);">
            <div style="max-width: 600px;">
              <h3 style="font-size: 2.5rem; margin-bottom: var(--spacing-sm);">Future Board</h3>
              <p class="editorial" style="font-size: 1.3rem;">Upcoming campaigns and early access to brand deals.</p>
            </div>
            <div class="handwritten" style="color: var(--color-accent-yellow); font-size: 2rem;">Loading...</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7 — JOIN CLOUTERRY -->
      <section id="join" class="section-wrapper" style="margin-bottom: var(--spacing-xl);">
        <div class="bento-card paper" style="text-align: center; padding: clamp(2rem, 8vw, 6rem);">
          <h1 class="massive-text" style="margin-bottom: var(--spacing-lg);">LET'S MAKE ADS<br/>PEOPLE ACTUALLY<br/>WATCH.</h1>
          <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
             <a href="/creators" class="magnetic-btn red" style="border-radius: 12px; font-size: 2rem; padding: 1rem 2rem;">FOR CREATORS</a>
             <a href="/brands" class="magnetic-btn blue" style="border-radius: 12px; font-size: 2rem; padding: 1rem 2rem;">FOR BRANDS</a>
          </div>
        </div>
      </section>
      
    </div>
"""

new_file_content = content[:start_idx] + new_html + "\n" + content[end_idx:]

with open(html_path, 'w') as f:
    f.write(new_file_content)

print("index.html and components.css updated with Bento redesign successfully")
