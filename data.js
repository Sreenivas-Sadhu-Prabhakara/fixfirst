/* ============================================================
   fixfirst — the repair corpus.
   Plain data, loaded as a normal script (no modules, no network).
   Exposed as window.FIXFIRST_DATA for app.js to consume.

   Each category: { id, name, icon, items: [ ... ] }
   Each item:     { id, name, problems: [ ... ] }
   Each problem (a "repair card"):
     {
       id, title, difficulty ("Easy"|"Moderate"|"Involved"),
       time, tools: [..], materials: [..],
       steps: [..],                       // numbered, concrete
       safety: "" | "…",                  // shown as a caution block when set
       replace: "when it's genuinely time to replace",
       recycle: "how to dispose / recycle responsibly",
       tags: [..]                         // extra searchable keywords
     }
   ============================================================ */
(function () {
  "use strict";

  var DATA = [

    /* ========================================================
       CLOTHING
       ======================================================== */
    {
      id: "clothing",
      name: "Clothing",
      icon: "stitch",
      items: [
        {
          id: "jeans",
          name: "Jeans / trousers",
          problems: [
            {
              id: "ripped-seam",
              title: "A seam has split open",
              difficulty: "Easy",
              time: "15–25 min",
              tools: ["Sewing needle", "Pins or clips", "Scissors", "Iron (optional)"],
              materials: ["Strong polyester thread in a matching colour"],
              steps: [
                "Turn the garment inside out so you sew on the wrong side and the repair stays hidden.",
                "Line the two raw edges back up exactly where the old seam ran and pin them together.",
                "Thread the needle, knot the end, and start a couple of stitches before the tear for strength.",
                "Sew along the original seam line with a small backstitch: each stitch goes forward two, back one, so the line can't unzip.",
                "Sew past the end of the tear by a centimetre, then knot off and trim the thread.",
                "Press the seam flat with a warm iron so it lies neatly."
              ],
              safety: "",
              replace: "If the fabric itself is thin and tearing beside the seam (not the thread giving way), the cloth is worn out and restitching won't hold for long.",
              recycle: "Worn-out cotton jeans are prized by textile recyclers and make good cleaning rags. Many clothing shops run take-back bins; don't put textiles in general waste if a collection exists near you.",
              tags: ["seam", "split", "trousers", "pants", "sewing"]
            },
            {
              id: "hole-knee",
              title: "A hole or worn patch (knee, pocket, thigh)",
              difficulty: "Moderate",
              time: "30–45 min",
              tools: ["Sewing needle or sewing machine", "Scissors", "Iron"],
              materials: ["Iron-on denim/twill patch or a scrap of similar fabric", "Matching thread"],
              steps: [
                "Trim any loose frayed threads around the hole so you have a clean edge to work with.",
                "Cut a patch 2–3 cm larger than the hole on every side.",
                "Slip the patch behind the hole (inside the leg) for an invisible mend, or on top for a visible, sturdier one.",
                "If it's iron-on, follow the pack: usually a hot dry iron pressed firmly for 15–30 seconds, no steam.",
                "For a lasting result, still stitch around the edge — machine zig-zag, or hand backstitch — so washing can't peel it off.",
                "Optional: sew rows of straight stitching across the hole (a 'darn') to reinforce a high-wear area like a knee."
              ],
              safety: "The iron is hot enough to burn — rest it on its heel between presses and keep fingers clear of the plate.",
              replace: "If several holes are opening at once and the denim tears when you tug it, the whole panel is thin and further patching is a losing battle.",
              recycle: "Cut usable sections into rags or craft fabric; send the rest to a textile recycling bank rather than landfill.",
              tags: ["hole", "patch", "knee", "worn", "darn"]
            }
          ]
        },
        {
          id: "shirt",
          name: "Shirt / top",
          problems: [
            {
              id: "popped-button",
              title: "A button has fallen off",
              difficulty: "Easy",
              time: "5–10 min",
              tools: ["Sewing needle", "Scissors"],
              materials: ["The button (or a close spare — check the spares sewn inside the hem)", "Matching thread"],
              steps: [
                "Find the old thread marks so you sew the button back in exactly the right spot; a misplaced button pulls the front crooked.",
                "Thread the needle, double the thread and knot the ends together for strength.",
                "Come up from the back through one hole, then down through the diagonal hole, building an X (or two parallel bars for a 4-hole button).",
                "Lay a toothpick or matchstick across the top of the button and sew over it — this leaves a little slack so the button sits over the fabric, not crushed against it.",
                "After 5–6 passes, bring the needle up under the button, remove the toothpick, and wind the thread 3–4 times around the threads under the button to form a neat 'shank'.",
                "Push the needle to the back and knot off firmly against the fabric."
              ],
              safety: "",
              replace: "Almost never — a button is one of the cheapest, easiest fixes there is. Replace the shirt only if the buttonholes themselves are fraying open.",
              recycle: "Keep spare buttons in a jar; they're endlessly reusable. A whole shirt beyond repair goes to a textile bank.",
              tags: ["button", "fell off", "sewing", "shank"]
            }
          ]
        },
        {
          id: "zipper",
          name: "Zipper",
          problems: [
            {
              id: "stuck-zip",
              title: "The zip is stuck or won't glide",
              difficulty: "Easy",
              time: "5 min",
              tools: ["A cotton bud or cloth"],
              materials: ["A lubricant: graphite pencil, bar soap, lip balm, or candle wax"],
              steps: [
                "First check the obvious: a thread or bit of fabric caught in the slider. Gently ease it out with tweezers or a pin — don't yank the pull.",
                "Rub a graphite pencil tip back and forth over the teeth on both sides; graphite is a dry lubricant that won't stain.",
                "No pencil? Rub a bar of soap, a candle, or a little lip balm along the teeth instead.",
                "Work the slider up and down slowly over the lubricated section, extending its travel a little each time.",
                "Do the whole length once it frees up, so the lubricant coats all the teeth."
              ],
              safety: "",
              replace: "If the slider still won't move after lubricating and nothing is jammed, the slider itself may be worn — see the split-teeth fix, or take it to a tailor for a new slider, which is cheaper than a new garment.",
              recycle: "Zips are metal and plastic — a tailor can salvage a good zip from a dead garment. Otherwise recycle the garment as textile.",
              tags: ["zip", "stuck", "jammed", "won't move", "lubricate"]
            },
            {
              id: "split-teeth",
              title: "The zip closes but splits open behind the slider",
              difficulty: "Moderate",
              time: "10–20 min",
              tools: ["Pliers", "Scissors"],
              materials: ["A replacement slider of the same size (optional)"],
              steps: [
                "This almost always means the slider has worn wider and no longer squeezes the teeth together — the teeth themselves are usually fine.",
                "Zip it fully open. With pliers, gently squeeze the two side plates of the slider a tiny amount — a fraction of a millimetre each side.",
                "Test: zip it up and check it stays closed. Squeeze a touch more if it still splits, but go slowly — over-squeezing jams the slider solid.",
                "If squeezing doesn't work, the slider is too worn: cut it off past the bottom stop, slide a matching new slider on from the bottom, and crimp a new metal stop below it with the pliers.",
                "Test the full length a few times before trusting it."
              ],
              safety: "Pliers can slip — squeeze in small controlled movements and keep your other hand clear.",
              replace: "If the metal or plastic teeth themselves are missing, bent, or torn from the tape, the zip tape needs replacing — a job for a tailor, still far cheaper than binning a coat or bag.",
              recycle: "See stuck-zip: a good zip can be salvaged; otherwise recycle as textile/mixed.",
              tags: ["zip", "split", "separating", "slider", "teeth"]
            }
          ]
        },
        {
          id: "hem",
          name: "Hem",
          problems: [
            {
              id: "fallen-hem",
              title: "A hem has come down / is trailing",
              difficulty: "Easy",
              time: "15–30 min",
              tools: ["Sewing needle", "Pins", "Iron"],
              materials: ["Matching thread, or iron-on hemming tape for a no-sew fix"],
              steps: [
                "Turn the garment inside out and fold the hem back up to its original crease — the old fold line and needle holes show you where.",
                "Pin the fold in place all the way round, checking the length looks even in a mirror.",
                "No-sew option: slip iron-on hemming tape inside the fold and press firmly per the pack. Good for a quick fix, less durable than stitching.",
                "To sew it: use a 'blind hem' slip stitch — pick up just one or two threads of the outer fabric each stitch so almost nothing shows on the right side.",
                "Keep the stitches loose enough that the hem doesn't pucker, and knot off every 20 cm or so, so one broken stitch can't drop the whole hem.",
                "Press the finished hem flat."
              ],
              safety: "",
              replace: "Rarely — a hem is trivial to redo. Replace only if the fabric edge is badly frayed and there isn't enough length left to re-fold.",
              recycle: "N/A — this fix restores the garment; keep wearing it.",
              tags: ["hem", "fell", "trailing", "trousers", "skirt", "dress"]
            }
          ]
        },
        {
          id: "shoelace",
          name: "Shoelace / drawcord",
          problems: [
            {
              id: "frayed-aglet",
              title: "The plastic tip has come off (lace won't thread)",
              difficulty: "Easy",
              time: "5–10 min",
              tools: ["Scissors"],
              materials: ["A little clear tape or heat-shrink; or a dab of clear nail varnish / glue"],
              steps: [
                "Trim the frayed, splayed end of the lace back to neat, tight strands.",
                "Quick fix: wrap the last centimetre tightly with a small piece of clear sticky tape, rolling it as thin as you can so it still threads through the eyelet.",
                "Neater fix: twist the strands together, coat the tip with a thin layer of clear nail varnish or PVA glue, and roll it between your fingers to a point. Let it dry hard.",
                "Best fix: slide a short piece of heat-shrink tubing over the tip and shrink it with a hairdryer for a proper new aglet.",
                "Let it set fully before threading it back through the eyelets."
              ],
              safety: "",
              replace: "Laces are cheap and standard sizes — if both ends are shot, a fresh pair costs almost nothing. This fix just saves a trip.",
              recycle: "Old fabric laces can go with textile recycling or be reused as ties/plant supports.",
              tags: ["shoelace", "lace", "aglet", "tip", "frayed", "drawcord", "drawstring"]
            }
          ]
        },
        {
          id: "socks",
          name: "Socks / knitwear",
          problems: [
            {
              id: "hole-sock",
              title: "A hole in a sock or jumper",
              difficulty: "Moderate",
              time: "20–40 min",
              tools: ["Darning needle (blunt, large eye)", "A darning mushroom, light bulb, or a rounded stone"],
              materials: ["Wool or yarn close to the garment's weight and colour"],
              steps: [
                "Stretch the hole gently over a darning mushroom or a smooth round object so the area is taut and domed.",
                "Thread a length of matching yarn; don't knot the end — knots wear through and irritate skin.",
                "Lay a grid of 'warp' threads first: run stitches back and forth across the hole in one direction, anchoring 5 mm into the good knitting on each side.",
                "Now weave the 'weft' at right angles: go over one warp thread, under the next, alternating each row like darning a net over the gap.",
                "Keep the weave snug but not tight, so the patch stays flexible.",
                "Weave the loose ends into the surrounding fabric to secure them, and trim."
              ],
              safety: "",
              replace: "For cheap socks it's usually not worth darning a second time; for a good wool jumper, darning is well worth it and can be nearly invisible.",
              recycle: "Odd and holey socks make great dusting cloths or drawer sachets. Pure wool can be composted or sent to wool recyclers.",
              tags: ["hole", "sock", "jumper", "sweater", "darn", "knit", "moth"]
            }
          ]
        }
      ]
    },

    /* ========================================================
       KITCHEN
       ======================================================== */
    {
      id: "kitchen",
      name: "Kitchen",
      icon: "pan",
      items: [
        {
          id: "kettle",
          name: "Electric kettle",
          problems: [
            {
              id: "wont-heat",
              title: "The kettle won't heat up",
              difficulty: "Easy",
              time: "10–20 min",
              tools: ["A cloth"],
              materials: ["White vinegar or citric acid (for descaling)"],
              steps: [
                "SAFETY FIRST: unplug the kettle and let it cool before touching anything.",
                "Check the base: lift the kettle off and set it back squarely — it must seat fully on the power base to make contact. Try a different, known-working socket.",
                "Check the auto shut-off: if it clicks off almost instantly, the lid may not be closing fully, or heavy limescale is fooling the thermostat. Close the lid firmly.",
                "Descale it: heavy limescale on the element insulates it and can stop it heating. Fill with a 1:1 mix of water and white vinegar, boil (or leave to soak an hour), then rinse thoroughly two or three times.",
                "If it has a removable limescale filter at the spout, take it out and scrub it.",
                "Plug back in and test with fresh water."
              ],
              safety: "This is a mains appliance. Only do the checks above (seating, socket, descaling). Do NOT open the base or touch internal wiring or the heating element's connections. If it still won't heat, it needs replacing or a qualified repair — not DIY.",
              replace: "If it's seated correctly on a working socket, isn't scaled up, and still won't heat, the element or thermostat has failed. On an inexpensive kettle, replacing is usually more sensible than repair.",
              recycle: "A dead kettle is WEEE (electrical waste) — take it to an electrical-recycling point or a shop take-back scheme. Never bin it with general rubbish.",
              tags: ["kettle", "not heating", "no power", "limescale", "descale", "electric"]
            }
          ]
        },
        {
          id: "blender",
          name: "Blender",
          problems: [
            {
              id: "leaks-base",
              title: "It leaks from the bottom of the jug",
              difficulty: "Easy",
              time: "10–15 min",
              tools: ["Nothing, or a spanner if the blade collar is threaded"],
              materials: ["A replacement sealing gasket/O-ring (cheap, sold by blade size)"],
              steps: [
                "Unplug the blender and lift the jug off the motor base.",
                "Unscrew the blade assembly from the bottom of the jug (it usually twists off, sometimes with a collar).",
                "Find the rubber sealing ring (gasket) that sits between the blade and the jug. Leaks almost always mean it's perished, torn, or was reassembled off-centre.",
                "Clean the ring and the seat; if the ring is cracked, hardened, or stretched, fit a new one of the same size.",
                "Reassemble making sure the gasket sits flat and even all the way round, then hand-tighten the blade collar snugly.",
                "Test with plain water before blending food."
              ],
              safety: "The blades are sharp — handle the blade assembly by its hub, not the edges, and keep it unplugged while you work.",
              replace: "If the leak is from a cracked jug rather than the seal, replace the jug (often sold separately) rather than the whole blender.",
              recycle: "A dead motor unit is WEEE — take it to electrical recycling. Glass jugs go with glass recycling if unbroken; wrap broken glass safely.",
              tags: ["blender", "leak", "seal", "gasket", "o-ring", "jug"]
            }
          ]
        },
        {
          id: "pan",
          name: "Pots & pans",
          problems: [
            {
              id: "loose-handle",
              title: "The handle is loose or wobbly",
              difficulty: "Easy",
              time: "5–10 min",
              tools: ["Screwdriver (usually flat or Phillips)"],
              materials: ["A drop of thread-locking fluid (optional)"],
              steps: [
                "Let the pan cool completely.",
                "Look at how the handle attaches: most have one or two screws through a metal bracket, either inside the pan or from underneath the handle.",
                "Hold the handle in its correct position and tighten the screw(s) firmly with the right screwdriver.",
                "If the screw won't bite because the thread is worn, a tiny dab of thread-locking fluid or wrapping the thread with plumber's PTFE tape can restore grip.",
                "Tighten, let any thread-locker cure per its instructions, then test that the handle holds a full pan's weight before cooking with it."
              ],
              safety: "A handle that lets go over a hot hob causes serious burns and scalds. If it's a riveted handle that's come loose (not a screw), re-riveting is a workshop job — don't cook with it until it's solid.",
              replace: "If the pan body itself is warped so it rocks on the hob, or a non-stick coating is badly worn, replace it. A loose screw-on handle almost never justifies a new pan.",
              recycle: "Metal pans are valuable scrap — take them to a metal-recycling point. Remove plastic handles first where you can.",
              tags: ["pan", "pot", "handle", "loose", "wobbly", "screw"]
            },
            {
              id: "nonstick-flaking",
              title: "The non-stick coating is scratched or flaking",
              difficulty: "Easy",
              time: "2 min to decide",
              tools: [],
              materials: [],
              steps: [
                "There is no safe way to 're-coat' a worn non-stick pan at home — kits sold for this rarely bond well and can make things worse.",
                "Assess it honestly: light surface scratches with the coating still intact and bonded are cosmetic and generally fine to keep using.",
                "But if the coating is flaking, peeling, or bubbling so that pieces come away, stop using it for food. You don't want coating fragments in your meals.",
                "Switch that pan to non-food use (or retire it) and cook in stainless steel or cast iron, which last for decades and can be restored.",
                "To make the next non-stick pan last: use wooden or silicone utensils, avoid high dry heat, and never use metal scourers on it."
              ],
              safety: "Don't heat a flaking non-stick pan empty at high temperature — degrading coatings can give off fumes. Keep the kitchen ventilated.",
              replace: "Once the coating is actively flaking or peeling, it's genuinely time to replace it — this is a case where 'fix it' means 'stop using it'.",
              recycle: "Non-stick pans are hard to recycle kerbside because of the coating; take them to a scrap-metal facility that accepts them, or a household waste recycling centre's metal stream.",
              tags: ["non-stick", "nonstick", "teflon", "flaking", "peeling", "scratched", "coating"]
            }
          ]
        },
        {
          id: "fridge-seal",
          name: "Fridge door",
          problems: [
            {
              id: "fridge-gasket",
              title: "The door doesn't seal (warm, or won't stay shut)",
              difficulty: "Easy",
              time: "10–20 min",
              tools: ["A hairdryer", "A cloth", "A sheet of paper (to test the seal)"],
              materials: ["Warm soapy water; petroleum jelly (optional); a replacement magnetic gasket if worn"],
              steps: [
                "Test the seal: close the door on a sheet of paper. If it slides out easily, the seal is weak at that spot; do this all round the door.",
                "Clean the rubber gasket and the fridge frame with warm soapy water — sticky food residue stops it sealing and holds it open.",
                "If the gasket is squashed flat or wavy, warm it gently with a hairdryer and press it back into shape; the heat lets the rubber relax and re-seat.",
                "A tiny smear of petroleum jelly on the hinge side helps a dragging seal glide and grip.",
                "Check the fridge is level and tilts very slightly back so the door swings shut on its own; adjust the front feet if not.",
                "If the gasket is torn or perished, it clips or screws out — order a matching replacement by model number and fit the new one."
              ],
              safety: "",
              replace: "A worn gasket is a cheap, replaceable part — never replace a whole working fridge over a door seal. Replace the appliance only if the compressor/cooling has failed.",
              recycle: "Fridges contain refrigerant gases and must go to proper WEEE collection that degasses them safely — never fly-tip or bin one.",
              tags: ["fridge", "refrigerator", "door", "seal", "gasket", "not closing", "warm"]
            }
          ]
        }
      ]
    },

    /* ========================================================
       CABLES & ELECTRONICS
       ======================================================== */
    {
      id: "electronics",
      name: "Cables & electronics",
      icon: "plug",
      items: [
        {
          id: "charger-cable",
          name: "Charging cable",
          problems: [
            {
              id: "fraying-cable",
              title: "The cable is fraying near the plug",
              difficulty: "Easy",
              time: "10–15 min",
              tools: ["Scissors"],
              materials: ["Heat-shrink tubing (best), or self-amalgamating/electrical tape, or a spring from an old pen"],
              steps: [
                "Only attempt this if just the outer jacket is split and the inner wires are still intact and insulated. If bare copper is showing, hot to the touch, or sparking, stop — retire the cable.",
                "Wipe the area clean and dry.",
                "Best fix: slide a piece of heat-shrink tubing over the frayed section (do this before you'd have to detach anything) and shrink it with a hairdryer on hot until it grips snugly.",
                "No heat-shrink? Wrap the split tightly and smoothly with electrical tape, or coil the spring from a ballpoint pen around the base of the plug to stop it flexing there.",
                "The real cause is repeated sharp bending at the plug — support the cable so it can't kink at that point in future.",
                "Test charging and feel the repaired section after a few minutes; any warmth means retire it."
              ],
              safety: "A frayed charger with exposed conductors is a fire and shock risk. Never tape over bare copper and keep using it — if the copper is exposed, replace the cable. Mains-voltage cables (not low-voltage USB) with damage should always be replaced, not taped.",
              replace: "If the wires inside are broken (the device charges only at one cable angle), the conductors are fatigued — a new cable is cheap and far safer than nursing a broken one.",
              recycle: "Cables are WEEE and contain recoverable copper — drop them at an electrical-recycling point or a cable take-back bin, not the bin.",
              tags: ["cable", "charger", "fraying", "frayed", "wire", "usb", "lead"]
            }
          ]
        },
        {
          id: "phone-port",
          name: "Phone charging port",
          problems: [
            {
              id: "wont-connect",
              title: "The charger won't connect or keeps dropping out",
              difficulty: "Easy",
              time: "5–10 min",
              tools: ["A wooden toothpick or a plastic SIM tool", "A torch/flashlight"],
              materials: [],
              steps: [
                "Before blaming the phone, try a different cable and charger — a worn cable is the more common culprit.",
                "Power the phone off. Shine a light into the charging port: pocket lint packs into the bottom and stops the plug seating fully.",
                "Gently scrape the lint out with a wooden toothpick or plastic tool. Work slowly and lift the debris out — don't jab.",
                "Never use a metal pin and never use water; you can short or bend the delicate contacts inside.",
                "A short burst of dry compressed air (from a can) can help clear loosened dust.",
                "Reconnect the charger — a clean port usually clicks in firmly and charges reliably again."
              ],
              safety: "Metal tools in a charging port can short the contacts or damage them. Use wood or plastic only, and keep the phone powered off while you clean.",
              replace: "If the port is physically loose, bent, or corroded (e.g. after a soaking) and cleaning doesn't help, a port replacement is a repair-shop job — usually far cheaper than a new phone.",
              recycle: "Phones are valuable WEEE — trade in, donate, or recycle at a phone take-back point. Wipe your data first.",
              tags: ["phone", "charging", "port", "lint", "loose", "won't charge", "connector"]
            }
          ]
        },
        {
          id: "remote",
          name: "TV remote",
          problems: [
            {
              id: "remote-dead",
              title: "The remote has stopped working",
              difficulty: "Easy",
              time: "5–15 min",
              tools: ["A smartphone camera (as an infrared tester)"],
              materials: ["Fresh batteries", "Isopropyl alcohol and a cotton bud (for sticky buttons)"],
              steps: [
                "Start with fresh batteries — this fixes the large majority of 'dead' remotes. Check they're the right way round.",
                "Clean the battery contacts: if they look dull or corroded, rub them with a cotton bud dipped in a little vinegar or isopropyl alcohol, then dry them.",
                "Test whether it's transmitting: point the remote at your phone's camera and press a button — most phone cameras can 'see' the infrared LED flash on screen even though your eye can't.",
                "If some buttons work but others don't, the rubber contact pads are dirty. Open the remote (clips or small screws), and clean the black pads and the circuit board pattern with isopropyl alcohol on a cotton bud.",
                "Let everything dry fully, reassemble, and re-pair if it's a Bluetooth remote (hold the pairing button per the TV's manual)."
              ],
              safety: "Isopropyl alcohol is flammable — use small amounts, keep it away from flames, and let it evaporate before putting batteries back.",
              replace: "If the IR LED never flashes on camera even with new batteries and clean contacts, the emitter or board has failed — a universal or official replacement remote is inexpensive.",
              recycle: "Recycle the remote as WEEE and the old batteries at a battery-collection point (never in general waste — batteries can start fires in bin lorries).",
              tags: ["remote", "tv", "dead", "not working", "batteries", "infrared", "buttons"]
            }
          ]
        },
        {
          id: "earbuds",
          name: "Earbuds / earphones",
          problems: [
            {
              id: "one-silent",
              title: "One side has gone quiet",
              difficulty: "Easy",
              time: "10 min",
              tools: ["A soft dry toothbrush or a wooden toothpick"],
              materials: ["Isopropyl alcohol (a tiny amount)"],
              steps: [
                "For wired earphones, first flex and rotate the cable gently near the plug and near the earpiece while playing audio. If sound cuts in and out, there's a broken wire — see 'replace'.",
                "For any earbud, earwax blocking the mesh grille is the most common cause of one quiet side.",
                "Look at the mesh on the quiet bud: if it's clogged, brush it gently with a dry soft toothbrush, holding the bud face-down so debris falls out.",
                "For stubborn wax, dab (don't soak) the mesh with a tiny bit of isopropyl alcohol on a cotton bud and let it dry fully before use.",
                "Remove and clean silicone ear tips separately in warm soapy water, dry them, and refit.",
                "For wireless buds, also try re-seating them in the case, cleaning the charging contacts, and re-pairing; an uneven charge can mute one side."
              ],
              safety: "Keep liquid away from the internal electronics and charging contacts — use only a barely-damp swab on the grille, never submerge an electronic earbud.",
              replace: "If cleaning doesn't help and a wired earphone crackles when you flex the cable, the conductor is broken — usually not worth repairing on cheap earphones. Retire them.",
              recycle: "Earbuds and their cases are WEEE — recycle at an electrical point; don't bin the lithium battery in wireless buds (fire risk).",
              tags: ["earbuds", "earphones", "headphones", "one side", "quiet", "no sound", "wax"]
            }
          ]
        },
        {
          id: "laptop-fan",
          name: "Laptop",
          problems: [
            {
              id: "overheating-fan",
              title: "It runs hot and the fan roars",
              difficulty: "Easy",
              time: "10 min",
              tools: ["A can of compressed air", "A soft brush", "A cloth"],
              materials: [],
              steps: [
                "Shut the laptop down and unplug it. A roaring fan almost always means the vents and heatsink are choked with dust.",
                "Find the intake and exhaust vents (usually on the sides or underneath) and the fan grille.",
                "Blast short bursts of compressed air into the vents. Hold the can upright and, importantly, hold the fan blades still with a toothpick or brush so the airflow doesn't over-spin and damage the fan bearing.",
                "Brush away loosened dust from the outside; don't push it further in.",
                "Make sure you use the laptop on a hard flat surface, not a bed or lap, so soft material can't block the underside vents.",
                "Restart and check it runs cooler and quieter. A laptop cooling stand helps if it still runs warm."
              ],
              safety: "Never open the laptop case or touch internals unless you know what you're doing and it's out of warranty — external vent-cleaning is the safe user-serviceable step. Deep re-pasting of the CPU is a repair-shop job.",
              replace: "If it still overheats after cleaning and on a hard surface, the thermal paste or fan may need servicing — a repair, not a reason to buy a new laptop.",
              recycle: "Laptops are valuable WEEE with recoverable metals — recycle or trade in, and wipe your data first.",
              tags: ["laptop", "hot", "overheating", "fan", "loud", "noisy", "dust", "vents"]
            }
          ]
        }
      ]
    },

    /* ========================================================
       FURNITURE
       ======================================================== */
    {
      id: "furniture",
      name: "Furniture",
      icon: "chair",
      items: [
        {
          id: "chair",
          name: "Chair",
          problems: [
            {
              id: "wobbly-chair",
              title: "It wobbles or a leg is loose",
              difficulty: "Moderate",
              time: "20–45 min (+ glue drying)",
              tools: ["Screwdriver or Allen key", "A mallet or hammer with a cloth pad", "Clamps or a strap"],
              materials: ["Wood glue (PVA)", "Cocktail sticks/toothpicks or thin wood shavings (to pack a loose joint)"],
              steps: [
                "Work out whether it wobbles because a joint is loose, or because one leg is a hair too short (rocks diagonally).",
                "For a loose joint: gently knock the joint apart, scrape off the old dried glue from both surfaces so new glue can grip bare wood.",
                "If the peg (dowel/tenon) is now loose in its hole, wrap it with a little glued thread, or push glued toothpicks into the hole to take up the slack.",
                "Apply wood glue to both surfaces, push the joint fully home, and clamp it (or loop a strap around all four legs and twist it tight). Wipe away squeeze-out.",
                "Leave it clamped for the full glue drying time — usually overnight — before sitting on it.",
                "For a leg that's slightly too short, add a self-adhesive felt pad or trim the longer legs by a whisker until it sits flat."
              ],
              safety: "Don't sit-test a freshly glued chair — a joint that lets go under you causes falls. Wait for the glue to cure fully.",
              replace: "If the wood around a joint is cracked through or crumbling (rot/woodworm), gluing won't hold; that leg or rail needs replacing, or the chair retiring.",
              recycle: "Solid-wood chairs are worth repairing or donating. If it's truly beyond saving, wood can go to a household recycling centre's wood stream; metal frames to metal.",
              tags: ["chair", "wobble", "wobbly", "loose leg", "joint", "rocking"]
            },
            {
              id: "squeaky-chair",
              title: "It squeaks or creaks when you sit",
              difficulty: "Easy",
              time: "10 min",
              tools: ["Screwdriver or Allen key"],
              materials: ["Wax, soap, or PVA glue for the joints"],
              steps: [
                "A creak is almost always a joint moving. First, tighten every screw and bolt you can find.",
                "If the noise is wood-on-wood in a glued joint, work a little PVA glue or beeswax into the gap and clamp it while it sets.",
                "For a screw that spins in a stripped hole, remove it, push a glued toothpick or two into the hole, let dry, then re-drive the screw into the fresh wood.",
                "Rub candle wax or dry soap on any surfaces that rub against each other but aren't meant to be glued.",
                "Sit-test gently once anything glued has cured."
              ],
              safety: "",
              replace: "Rarely for a squeak alone — it's a maintenance fix. Replace only if the frame is cracked (see wobbly chair).",
              recycle: "N/A — the fix keeps the chair in service.",
              tags: ["chair", "squeak", "creak", "noise", "joint"]
            }
          ]
        },
        {
          id: "table",
          name: "Table",
          problems: [
            {
              id: "wobbly-table",
              title: "The table wobbles / rocks",
              difficulty: "Easy",
              time: "10–20 min",
              tools: ["Screwdriver", "A ruler or your eye"],
              materials: ["Self-adhesive felt or rubber feet, or thin card/wood shims"],
              steps: [
                "First tighten the bolts where the legs meet the frame — a slightly loose leg mount is the usual cause.",
                "If the legs are solid but the table still rocks, one leg is short or the floor is uneven. Find the rocking pair by pressing diagonally opposite corners.",
                "Identify the short leg (the one that lifts). Stick a felt pad, or add stacked card shims, under it until the table sits firm.",
                "For an adjustable-foot table, simply screw that foot out a turn or two.",
                "Check on the surface where you actually use it — floors vary, so tune it in place."
              ],
              safety: "",
              replace: "If the tabletop is delaminating or a leg is cracked, that part needs replacing; the wobble fix above assumes sound legs.",
              recycle: "Solid tables are very reusable — donate or sell. Otherwise separate wood, metal, and glass for their recycling streams.",
              tags: ["table", "wobble", "wobbly", "rocking", "uneven", "shim"]
            }
          ]
        },
        {
          id: "hinge",
          name: "Door hinge",
          problems: [
            {
              id: "squeaky-hinge",
              title: "A door hinge squeaks",
              difficulty: "Easy",
              time: "5–10 min",
              tools: ["A cloth", "A hammer and nail or screwdriver (to lift the pin, optional)"],
              materials: ["A few drops of light machine oil, or petroleum jelly; silicone spray"],
              steps: [
                "Open and close the door to confirm which hinge squeaks.",
                "Quick fix: put a couple of drops of light oil or a smear of petroleum jelly at the top of the hinge pin and swing the door to work it in.",
                "Better fix: lift the hinge pin out (tap it up from below with a nail and hammer), wipe off old dried grease and any rust, smear the pin with oil or jelly, and drop it back in.",
                "Wipe away drips so they don't mark the floor or door.",
                "Swing the door a dozen times to distribute the lubricant; the squeak should be gone."
              ],
              safety: "Support the door if you remove more than one pin at a time — an unhinged door is heavy and can fall.",
              replace: "If the hinge is rusted solid or bent, replace the hinge itself — they're cheap and standard sizes; you don't replace the door.",
              recycle: "Old metal hinges go with scrap metal.",
              tags: ["hinge", "door", "squeak", "squeaky", "creak", "oil"]
            }
          ]
        },
        {
          id: "drawer",
          name: "Drawer",
          problems: [
            {
              id: "sticking-drawer",
              title: "A drawer sticks or won't slide smoothly",
              difficulty: "Easy",
              time: "10–20 min",
              tools: ["A cloth", "Screwdriver (for runners)"],
              materials: ["Candle wax, dry soap, or beeswax; or silicone spray for metal runners"],
              steps: [
                "Take the drawer right out and look at how it runs: bare wood sliding on wood, or on metal/plastic runners?",
                "Wooden runners: find the shiny worn tracks where it rubs, and rub candle wax, dry soap, or beeswax generously along both the drawer's runners and the frame's tracks.",
                "Metal/plastic runners: clean out dust and hair, check the runner screws are tight and the runner isn't bent, then apply a little silicone spray or light grease.",
                "If the drawer has swollen with damp, a very light sanding of the high spots on the sides helps — take off only a little and re-test.",
                "Slide it in and out several times to spread the lubricant."
              ],
              safety: "",
              replace: "If a metal runner is bent or its ball bearings are shot, replace that runner (sold in pairs) rather than the whole unit.",
              recycle: "N/A for the fix; broken runners go with scrap metal.",
              tags: ["drawer", "stick", "sticking", "jammed", "won't open", "runner", "slide"]
            },
            {
              id: "loose-knob",
              title: "A knob or handle keeps coming loose",
              difficulty: "Easy",
              time: "5–10 min",
              tools: ["Screwdriver", "Scissors"],
              materials: ["A dab of thread-locker or clear nail varnish; toothpicks + wood glue if the hole is stripped"],
              steps: [
                "Most knobs are held by a single machine screw from the back of the drawer front. Hold the knob still and tighten the screw properly.",
                "If it keeps working loose, put a small dab of thread-locking fluid or clear nail varnish on the screw threads so vibration can't back it out.",
                "If the screw spins freely because the hole in the wood is stripped (common with wooden knobs), push glued toothpicks into the hole, let dry, trim flush, then re-drive the screw into fresh wood.",
                "For a snapped screw, replace it with a matching one from a hardware shop — take the old knob in to size it.",
                "Give it a firm tug to confirm it holds before loading the drawer."
              ],
              safety: "",
              replace: "Knobs and handles are cheap, standard fittings — replace just the handle if it's cracked, never the whole unit.",
              recycle: "Metal handles go with scrap metal; keep spares in a jar for future fixes.",
              tags: ["knob", "handle", "loose", "drawer", "cabinet", "cupboard", "screw"]
            }
          ]
        },
        {
          id: "wood-surface",
          name: "Wooden surface",
          problems: [
            {
              id: "scratch-ring",
              title: "A scratch, or a white water/heat ring",
              difficulty: "Easy",
              time: "10–30 min",
              tools: ["Soft cloths", "A hairdryer or iron (for water rings)"],
              materials: ["For scratches: a matching wax stick, or a walnut. For white rings: mayonnaise/petroleum jelly or gentle heat"],
              steps: [
                "White cloudy ring (moisture trapped in the finish): rub the rag with a little petroleum jelly or mayonnaise over the mark, leave an hour, then buff — the oil displaces the moisture.",
                "Stubborn ring: lay a clean cloth over it and pass a warm (not hot) iron or hairdryer over it briefly to drive the moisture out of the finish; check often so you don't scorch it.",
                "Light scratch: rub a shelled walnut along the scratch — its natural oils darken and disguise the line. Buff with a soft cloth.",
                "Deeper scratch: fill and colour it with a matching wax repair stick, wiping off the excess with a cloth.",
                "Finish by wiping the whole surface with a little furniture polish or oil so the repaired spot blends in."
              ],
              safety: "Keep the iron warm, not hot, and always with a cloth between it and the wood, or you'll blister the finish.",
              replace: "Surface marks almost never justify replacing furniture. Deep damage into bare wood may need professional refinishing of that panel, still cheaper than a new piece.",
              recycle: "N/A — this restores the piece.",
              tags: ["wood", "scratch", "water ring", "heat ring", "white mark", "table", "polish"]
            }
          ]
        }
      ]
    },

    /* ========================================================
       BATHROOM & HOME
       ======================================================== */
    {
      id: "bathroom",
      name: "Bathroom & home",
      icon: "tap",
      items: [
        {
          id: "tap",
          name: "Tap / faucet",
          problems: [
            {
              id: "dripping-tap",
              title: "A tap drips constantly",
              difficulty: "Moderate",
              time: "30–45 min",
              tools: ["Adjustable spanner", "Screwdriver", "A cloth", "Pliers"],
              materials: ["Replacement washers or a ceramic cartridge (match your tap)", "Plumber's grease"],
              steps: [
                "Turn off the water to that tap first — use the isolation valve under the basin, or the main stopcock. Open the tap to drain and relieve pressure.",
                "Put the plug in the basin so no small parts vanish down the drain.",
                "Prise off the tap's decorative cap, undo the screw, and lift off the handle. Unscrew the headgear/bonnet with the spanner.",
                "Traditional tap: the culprit is the rubber washer at the bottom of the spindle. Undo the small nut, swap the perished washer for an identical new one, and smear a little plumber's grease on it.",
                "Modern mixer/lever tap: it uses a ceramic cartridge instead; lift the old cartridge out and drop in a matching replacement.",
                "Reassemble in reverse, turn the water back on slowly, and check for drips."
              ],
              safety: "A dripping tap is water only — safe to DIY. But if you can't isolate the water or the pipework is corroded, or it's a leak from a joint rather than the spout, call a plumber before you make it worse.",
              replace: "If the tap body is cracked or the seat inside is badly scored, the whole tap may need replacing — but try a washer/cartridge first; it fixes the vast majority of drips for a few coins.",
              recycle: "Brass and chrome taps are valuable scrap metal — take an old tap to a metal-recycling point.",
              tags: ["tap", "faucet", "drip", "dripping", "leak", "washer", "cartridge"]
            }
          ]
        },
        {
          id: "sealant",
          name: "Silicone sealant",
          problems: [
            {
              id: "black-mould",
              title: "Black mould on the sealant (bath/shower)",
              difficulty: "Moderate",
              time: "1–2 hrs (+ curing)",
              tools: ["A sealant/caulk removing tool or a sharp blade", "A caulking gun", "A cloth", "Gloves"],
              materials: ["Mould remover or thick bleach; new mould-resistant silicone sealant"],
              steps: [
                "If the mould is only surface-deep and the sealant is otherwise sound, try killing it first: apply a mould remover or bleach gel, leave per the instructions, then rinse and dry.",
                "If the mould has grown into and under the silicone (black stains you can't remove), the sealant must come out — mould behind it will keep coming back.",
                "Cut along both edges of the old silicone bead and peel it away; scrape off every last trace, then clean and dry the joint completely.",
                "Wipe the surfaces with a little rubbing alcohol so the new bead bonds well, and mask both sides with tape for a crisp line.",
                "Run a smooth new bead of mould-resistant silicone, smooth it with a wet finger or tool, and peel the tape while it's still wet.",
                "Leave it to cure fully (usually 24 hours) before running water or using the shower."
              ],
              safety: "Work in a ventilated room and wear gloves with mould remover/bleach. Never mix bleach with other cleaners (especially ammonia) — it releases toxic gas.",
              replace: "Re-sealing IS the replacement here — old sealant is meant to be renewed periodically. If the wall behind is soft or damp, that's a bigger water-ingress problem needing a professional look.",
              recycle: "Cured silicone isn't recyclable; bag the old scrapings with general waste. Recycle the empty cartridge tube per your local plastics rules.",
              tags: ["sealant", "caulk", "silicone", "mould", "mold", "black", "bath", "shower"]
            }
          ]
        },
        {
          id: "toilet",
          name: "Toilet",
          problems: [
            {
              id: "running-toilet",
              title: "The toilet keeps running",
              difficulty: "Moderate",
              time: "20–40 min",
              tools: ["Hands", "Adjustable spanner (for a new part)"],
              materials: ["A replacement flapper/flush-valve seal or fill valve (match your cistern)"],
              steps: [
                "Take the cistern lid off and flush while watching. A constantly running toilet is nearly always one of two things: water not sealing at the bottom, or the fill valve not shutting off.",
                "Check the flapper/flush-valve seal at the bottom: if it's warped or has a film of grime, water leaks past it continuously. Clean it, and if it's perished, fit a matching new one.",
                "Check the float and fill valve: if water is trickling into the overflow pipe, the float is set too high — bend or adjust it so the water stops below the overflow.",
                "If the fill valve hisses and never stops, its washer has failed; replacing the whole fill valve is a straightforward drop-in job (turn off the supply, undo the base nut, swap it).",
                "A quick test: put a little food colouring in the cistern; if colour appears in the bowl without flushing, the bottom seal is leaking.",
                "Reassemble, turn the supply back on, and watch a full fill-and-shut cycle."
              ],
              safety: "This is clean water and low risk. Turn off the isolation valve before removing any part. If the leak is from the cistern-to-pan joint or the supply pipe, call a plumber.",
              replace: "Individual parts (flapper, fill valve) are cheap and standard — replace those, not the whole toilet. Replace the cistern only if it's cracked.",
              recycle: "Old ceramic isn't kerbside-recyclable; a household recycling centre takes sanitaryware. Internal parts are mixed plastic.",
              tags: ["toilet", "running", "won't stop", "cistern", "flapper", "fill valve", "float"]
            }
          ]
        },
        {
          id: "sink",
          name: "Sink / drain",
          problems: [
            {
              id: "slow-drain",
              title: "The sink drains slowly / is blocked",
              difficulty: "Easy",
              time: "15–30 min",
              tools: ["A plunger", "Rubber gloves", "A bucket", "A drain snake or a bent wire (optional)"],
              materials: ["Baking soda and vinegar, or boiling water"],
              steps: [
                "Remove any plug or strainer and fish out visible hair and gunk at the top — that's often the whole blockage.",
                "Try a kettle of very hot (not boiling, if you have plastic pipes) water down the drain to melt grease.",
                "Natural approach: pour in a good amount of baking soda, then an equal amount of vinegar, cover for 10 minutes while it fizzes, then flush with hot water.",
                "Still slow? Plunge it: block any overflow hole with a wet cloth, ensure a little water covers the plunger cup, and plunge firmly a dozen times.",
                "For a stubborn clog, undo the U-bend (P-trap) underneath — put a bucket beneath it first — clean it out, and refit. This is where most blockages collect.",
                "Run the tap to confirm it drains freely."
              ],
              safety: "Avoid harsh chemical drain cleaners where you can — they're caustic, dangerous with a plunger (splash-back), and can damage pipes. Mechanical clearing is safer. If you use one, never plunge afterwards.",
              replace: "N/A — this clears the existing drain. Replace the trap only if it's cracked.",
              recycle: "N/A. Dispose of the cleared gunk in general waste, not back down the drain.",
              tags: ["sink", "drain", "slow", "blocked", "clog", "unclog", "plughole", "u-bend", "trap"]
            }
          ]
        },
        {
          id: "showerhead",
          name: "Showerhead",
          problems: [
            {
              id: "clogged-showerhead",
              title: "Weak, spraying, or blocked jets",
              difficulty: "Easy",
              time: "10 min hands-on (+ soak)",
              tools: ["An elastic band or a bag tie", "A cloth", "An old toothbrush", "A pin"],
              materials: ["White vinegar", "A sandwich bag"],
              steps: [
                "The jets are blocked with limescale. Easiest method: fill a strong sandwich bag with white vinegar and tie it over the showerhead so the whole spray plate is submerged.",
                "Leave it to soak for an hour or two (overnight for heavy scale). The vinegar dissolves the mineral build-up.",
                "Remove the bag, then scrub the face with an old toothbrush and poke any stubborn jets clear with a pin.",
                "Many showerheads have soft rubber nozzles — just rubbing your thumb firmly over them pops the scale off.",
                "Run the shower hot for a minute to flush loosened debris out, and enjoy the restored pressure."
              ],
              safety: "",
              replace: "If the plastic is cracked or the internal flow-restrictor is broken, showerheads are inexpensive to replace — but descaling revives most 'dying' ones.",
              recycle: "Metal showerheads go with scrap metal; mostly-plastic ones with mixed plastic recycling where accepted.",
              tags: ["shower", "showerhead", "weak", "blocked", "limescale", "descale", "pressure", "jets"]
            }
          ]
        }
      ]
    },

    /* ========================================================
       FOOTWEAR
       ======================================================== */
    {
      id: "footwear",
      name: "Footwear",
      icon: "shoe",
      items: [
        {
          id: "shoe-sole",
          name: "Shoe sole",
          problems: [
            {
              id: "sole-peeling",
              title: "The sole is peeling away from the shoe",
              difficulty: "Easy",
              time: "20 min (+ 24 hr curing)",
              tools: ["A cloth", "Clamps, strong tape, or a heavy weight", "Fine sandpaper (optional)"],
              materials: ["Flexible shoe-repair adhesive (e.g. a contact/urethane shoe glue)"],
              steps: [
                "Clean and dry both surfaces of the gap — the sole and the upper. Pick out any grit; glue won't stick to dirt.",
                "Lightly scuff both gluing surfaces with fine sandpaper so the adhesive can key in (skip on delicate materials).",
                "Use a proper flexible shoe glue, not superglue — shoes flex constantly and rigid glue cracks straight off. Apply a thin even layer to both faces.",
                "If it's a contact adhesive, let it go tacky for the stated time, then press the surfaces firmly together, lining them up exactly.",
                "Clamp, tape tightly, or weight the shoe down so the join stays pressed while it cures — usually 24 hours.",
                "Wipe off any squeeze-out before it sets, and don't wear the shoe until fully cured."
              ],
              safety: "Shoe glues give off strong fumes — use them in a well-ventilated space and avoid skin contact.",
              replace: "If the sole is worn paper-thin, cracked across, or the upper is falling apart too, re-gluing buys limited time — but a cobbler can often re-sole a good pair for far less than new shoes.",
              recycle: "Many shoe shops and charities run shoe take-back/reuse schemes; even unwearable shoes can be recycled into playground surfaces. Don't bin a repairable pair.",
              tags: ["shoe", "sole", "peeling", "coming off", "glue", "boot", "trainer"]
            },
            {
              id: "squeaky-shoe",
              title: "A shoe squeaks when you walk",
              difficulty: "Easy",
              time: "10 min",
              tools: ["A cloth"],
              materials: ["Talcum powder or baby powder; leather conditioner (for leather)"],
              steps: [
                "Work out where the squeak comes from: the insole rubbing, the outsole on the floor, or a leather part flexing.",
                "Insole squeak (most common): lift the insole out and sprinkle talcum powder underneath and inside the shoe to stop surfaces rubbing, then refit.",
                "If the sole squeaks on smooth floors, lightly scuff the shiny outsole with fine sandpaper for a bit of grip.",
                "Leather that creaks: rub in a little leather conditioner where it flexes to soften and quieten it.",
                "If it's a trapped bit of grit, remove the insole and clean out any debris."
              ],
              safety: "",
              replace: "Rarely — a squeak is cosmetic. Only replace if the shoe is failing structurally for other reasons.",
              recycle: "N/A — the shoe keeps its life.",
              tags: ["shoe", "squeak", "squeaky", "noise", "insole"]
            }
          ]
        },
        {
          id: "leather",
          name: "Leather shoes / bag",
          problems: [
            {
              id: "scuffed-leather",
              title: "Scuffed or scratched leather",
              difficulty: "Easy",
              time: "15–30 min",
              tools: ["Soft cloths", "An old toothbrush (for polish into seams)"],
              materials: ["Matching shoe polish or leather cream; leather conditioner"],
              steps: [
                "Wipe the leather clean of dust and dirt with a barely-damp cloth and let it dry.",
                "For light scuffs, rub a matching cream polish into the mark in small circles — the pigment fills and disguises the scuff.",
                "For a deeper scratch, apply conditioner first to soften the leather, then build up colour with thin layers of polish, letting each dry.",
                "Buff the whole area with a clean soft cloth to bring back the shine and blend the repair.",
                "Finish by conditioning the whole item occasionally so the leather stays supple and resists future scuffs."
              ],
              safety: "",
              replace: "Leather is very restorable — scuffs almost never mean replacement. Deep gouges into the hide can be filled by a leather specialist.",
              recycle: "Genuine leather goods are worth repairing and reselling; leather can also be recycled by specialist textile schemes.",
              tags: ["leather", "scuff", "scratch", "shoe", "bag", "polish", "mark"]
            }
          ]
        }
      ]
    },

    /* ========================================================
       BAGS & UMBRELLA
       ======================================================== */
    {
      id: "bags",
      name: "Bags & umbrella",
      icon: "umbrella",
      items: [
        {
          id: "umbrella",
          name: "Umbrella",
          problems: [
            {
              id: "bent-rib",
              title: "A rib is bent or snapped",
              difficulty: "Moderate",
              time: "15–30 min",
              tools: ["Pliers", "Scissors"],
              materials: ["A short length of thin wire or a paperclip; strong thread; a straw or thin tube for a splint"],
              steps: [
                "Open the umbrella so you can see how the ribs and stretchers link.",
                "Simply bent (not broken): carefully bend it back into line with pliers, supporting the joint so you don't snap it.",
                "Broken at a joint: the little connectors are the usual failure point. Thread a small piece of wire through the holes to rejoin the two parts and twist the ends closed, tucking them in so they don't tear the canopy.",
                "Snapped mid-rib: splint it — slide a short piece of thin tube (or a cut drinking straw) over the break, or lay a stiff wire alongside, and bind it tightly with thread or thin wire.",
                "Where a rib has pulled free of the canopy fabric, stitch it back to its little fabric tab with strong thread.",
                "Open and close it a few times gently to check it runs."
              ],
              safety: "Umbrella ribs are springy and the tips are sharp — keep your face clear when bending or when it snaps back open.",
              replace: "If the central shaft is bent or the runner mechanism is broken, repair is fiddly and often not worth it on a cheap umbrella — but a good one is worth mending.",
              recycle: "Separate the metal frame (scrap metal) from the fabric canopy (textile); the mixed handle goes to general waste. Whole umbrellas aren't kerbside-recyclable.",
              tags: ["umbrella", "rib", "bent", "broken", "snapped", "spoke"]
            }
          ]
        },
        {
          id: "bag-strap",
          name: "Bag strap",
          problems: [
            {
              id: "detached-strap",
              title: "A strap has come off or torn",
              difficulty: "Moderate",
              time: "30–60 min",
              tools: ["Heavy-duty needle or an awl", "Pliers", "Thimble", "Scissors"],
              materials: ["Strong bonded nylon/waxed thread; a replacement clip, D-ring, or rivet if hardware failed"],
              steps: [
                "Work out what failed: the stitching that held the strap, the metal clip/ring, or the strap webbing itself tearing.",
                "Stitching gave way: re-sew through the original holes with strong bonded thread using a saddle stitch (two needles, or one needle passing back and forth), and sew a box-with-a-cross pattern for maximum strength at the anchor point.",
                "Hardware failed: prise or cut off the broken clip/D-ring and fit a matching new one; a split-ring or a screw-in gate ring makes this easy without special tools.",
                "Webbing torn: fold under the frayed end, and if it's synthetic, briefly pass the cut edge near a flame to stop it fraying (carefully), then stitch it securely to a new anchor.",
                "For a riveted joint, a hand rivet or a Chicago screw gives a strong, tidy repair.",
                "Load-test the repair with something heavy before trusting it with your laptop."
              ],
              safety: "If you singe synthetic webbing to stop fraying, do it well away from anything flammable and let it cool before handling.",
              replace: "If the bag fabric around the anchor is rotten and tears when you pull, restitching won't hold — but a good bag can be re-anchored by a cobbler or bag-repair shop.",
              recycle: "Repairable bags can be donated. Otherwise separate metal hardware (scrap) from fabric (textile recycling).",
              tags: ["bag", "strap", "handle", "detached", "torn", "came off", "rucksack", "handbag"]
            },
            {
              id: "jammed-bag-zip",
              title: "The bag's zip is jammed or split",
              difficulty: "Easy",
              time: "10–20 min",
              tools: ["Pliers", "A cotton bud"],
              materials: ["Graphite pencil or bar soap; a replacement slider (optional)"],
              steps: [
                "If fabric or lining is caught in the slider, hold the zip tape taut and gently ease the trapped material back out — don't force the pull.",
                "Stiff or gritty zip: rub a graphite pencil or a little bar soap along the teeth and work the slider slowly to spread it.",
                "If the zip closes but keeps splitting open behind the slider, the slider has worn wide — squeeze its sides a fraction with pliers (see the clothing split-teeth fix) to make it grip again.",
                "If the pull tab has snapped off but the slider works, loop a paperclip, keyring, or a bit of cord through the slider as a new pull.",
                "Test the full length several times."
              ],
              safety: "Squeeze the slider with pliers in tiny steps — too much locks it up completely.",
              replace: "If the teeth are stripped from the tape, the zip needs replacing by a repairer — worthwhile on a good bag, not on a cheap one.",
              recycle: "Salvageable zips and hardware can be reused; otherwise recycle the bag as textile/mixed.",
              tags: ["bag", "zip", "jammed", "stuck", "split", "pull", "slider", "rucksack"]
            }
          ]
        }
      ]
    }

  ];

  // Expose to the app.
  if (typeof window !== "undefined") {
    window.FIXFIRST_DATA = DATA;
  }
})();
