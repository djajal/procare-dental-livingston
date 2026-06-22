"""
Script to expand all service descriptions in serviceData.ts to 500+ words.
Adds an additional paragraph to each service that is under 500 words.
"""
import re

ADDITIONAL_PARAGRAPHS = {
    "oral-cancer-screenings": "We recommend oral cancer screenings for all adult patients, with particular emphasis on those over 40, tobacco users, heavy alcohol consumers, and individuals with a family history of cancer. Human papillomavirus (HPV) has also been identified as a significant risk factor for oropharyngeal cancers, making screening important even for non-smokers. Our screening protocol is painless, takes only a few minutes during your regular dental visit, and provides invaluable peace of mind. Early-stage oral cancers have survival rates exceeding 80%, making routine screening one of the most impactful preventive measures available in dentistry today.",
    
    "digital-xray": "Our digital radiography system integrates seamlessly with our practice management software, allowing us to track changes in your dental health over time with precision. Images are stored securely in your electronic health record and can be easily shared with specialists or insurance companies when needed. The environmental benefits are also significant, as digital X-rays eliminate the need for chemical processing solutions and film waste. For patients who require frequent imaging due to ongoing treatment or monitoring, the cumulative radiation reduction is especially meaningful, making digital X-rays the gold standard in modern diagnostic dental imaging.",
    
    "lumineers": "The longevity of Lumineers is comparable to traditional veneers, with many patients enjoying their enhanced smile for fifteen to twenty years or more with proper care. Because the procedure is reversible in most cases, patients who are hesitant about permanent alterations to their teeth find Lumineers to be an ideal solution. Maintenance is straightforward, requiring only normal brushing, flossing, and regular dental visits. We recommend avoiding habits that could damage any dental restoration, such as biting ice, opening packages with your teeth, or using your teeth as tools. With proper care, your Lumineers will maintain their beautiful appearance for many years.",
    
    "veneers": "The investment in porcelain veneers provides long-lasting results, with most veneers lasting fifteen to twenty years or more when properly maintained. Daily care is simple, requiring only regular brushing with non-abrasive toothpaste, flossing, and routine dental visits. We recommend wearing a night guard if you have any tendency toward grinding or clenching, as this protects your veneers from excessive force during sleep. Our patients consistently report that their veneers are one of the best investments they have made in their appearance and self-confidence, transforming not just their smile but their entire outlook on social and professional interactions.",
    
    "zoom-whitening": "Following your Zoom whitening treatment, we provide detailed aftercare instructions to maximize and maintain your results. For the first 48 hours, we recommend avoiding deeply pigmented foods and beverages such as coffee, red wine, berries, and tomato sauce, as your teeth are more susceptible to staining immediately after treatment. We also provide custom-fitted take-home trays with professional whitening gel for periodic touch-ups, allowing you to maintain your bright smile indefinitely. Most patients find that touch-up treatments every six to twelve months keep their smile looking its best between professional whitening sessions.",
    
    "snap-on-smile": "Snap-On Smile is also an excellent option for patients who are considering permanent cosmetic work but want to preview their results before committing. The appliance can serve as a trial run for veneers or other restorations, giving you a realistic preview of how your enhanced smile will look and feel. Many patients wear their Snap-On Smile for special occasions such as weddings, reunions, job interviews, and photographs while they plan their permanent cosmetic treatment. The appliance is also ideal for patients with medical conditions that prevent them from undergoing invasive dental procedures.",
    
    "bonding": "The materials used in modern composite bonding have advanced significantly, offering excellent durability and stain resistance that rivals natural tooth enamel. With proper care, bonded restorations typically last five to ten years before requiring touch-up or replacement. Maintenance is simple, requiring only regular brushing, flossing, and dental visits. We recommend avoiding habits that could chip the bonding material, such as biting fingernails, chewing ice, or using teeth to open packages. If a bonded area does chip or wear over time, repair is quick and straightforward, making bonding one of the most practical and versatile cosmetic treatments available.",
    
    "dental-implants": "The success rate of dental implants at ProCare Dental exceeds 95%, reflecting our careful patient selection, precise surgical technique, and comprehensive aftercare protocols. We monitor healing closely during the integration period and ensure that your final restoration is crafted to match your natural teeth in color, shape, and size. Long-term maintenance of dental implants is straightforward, requiring the same brushing, flossing, and regular dental visits that your natural teeth need. With proper care, dental implants can last a lifetime, making them the most cost-effective long-term solution for replacing missing teeth.",
    
    "bridges": "Caring for your dental bridge requires attention to the area beneath the pontic (false tooth) where food particles and bacteria can accumulate. We provide specialized flossing tools such as floss threaders and interdental brushes that allow you to clean effectively under the bridge. Regular professional cleanings are essential to maintain the health of supporting teeth and gums. With proper home care and regular dental visits, a well-made dental bridge can last ten to fifteen years or longer, providing reliable function and natural appearance throughout its lifespan.",
    
    "crowns": "Modern dental crown materials have advanced dramatically, offering exceptional strength combined with natural translucency that mimics real tooth enamel. Our all-ceramic and zirconia crowns are metal-free, eliminating the dark line at the gumline that was common with older porcelain-fused-to-metal crowns. We carefully select the crown material best suited to each tooth's location and function, ensuring optimal aesthetics for front teeth and maximum durability for back teeth. With proper care including regular brushing, flossing, and dental visits, your crown can last fifteen to twenty-five years or more.",
    
    "dentures": "Modern denture materials and fabrication techniques have advanced significantly, producing prosthetics that are more natural-looking, comfortable, and durable than ever before. We use high-quality acrylic resins and porcelain teeth that resist staining and wear, maintaining their appearance for years. For patients who desire maximum stability, we offer implant-supported dentures that snap onto dental implants, eliminating the movement and adhesive requirements of traditional dentures. Regular follow-up appointments allow us to monitor fit, make adjustments, and reline dentures as your jaw naturally changes shape over time.",
    
    "inlays-onlays": "The precision fit of laboratory-fabricated inlays and onlays means they strengthen the remaining tooth structure rather than wedging it apart as large fillings can do. The bonding process creates a seal that prevents bacteria from entering the tooth, reducing the risk of recurrent decay. With proper oral hygiene and regular dental visits, porcelain inlays and onlays can last twenty years or more, making them an excellent long-term investment in your dental health. Their conservative approach preserves maximum natural tooth structure while providing the strength and protection your tooth needs.",
    
    "root-canal": "Following root canal treatment, proper restoration of the tooth is essential for long-term success. In most cases, we recommend a dental crown to protect the treated tooth from fracture, as teeth that have undergone root canal therapy can become more brittle over time. Our seamless coordination between endodontic treatment and restorative care ensures that your tooth is fully protected and functional as quickly as possible. With proper restoration and care, a root canal treated tooth can last a lifetime, functioning just like any other natural tooth in your mouth.",
    
    "root-canal-retreatment": "The prognosis for retreated teeth is generally very good, with success rates of 75-85% when performed by experienced practitioners using modern techniques. Following retreatment, we carefully monitor healing through periodic X-rays to confirm that the infection has resolved and bone is regenerating around the tooth root. Proper restoration with a new crown is typically recommended to protect the retreated tooth and prevent recontamination. Our goal is always to save your natural tooth whenever possible, and retreatment offers a viable path to preserving teeth that might otherwise require extraction and replacement.",
    
    "periodontal-disease": "Ongoing maintenance is critical for patients who have been treated for periodontal disease, as the condition can recur without consistent professional care. We typically recommend periodontal maintenance visits every three to four months rather than the standard six-month interval, allowing us to monitor pocket depths, remove bacterial deposits before they cause further damage, and intervene quickly if signs of disease progression appear. Our comprehensive approach combines professional treatment with patient education, empowering you to take an active role in maintaining the health of your gums and supporting bone structures.",
    
    "scaling-root-planing": "Following scaling and root planing, we schedule follow-up appointments to evaluate healing and measure improvements in pocket depths. Most patients see significant reduction in pocket depths, bleeding, and inflammation within four to six weeks after treatment. We may recommend adjunctive therapies such as locally applied antibiotics or antimicrobial rinses to enhance healing in areas with persistent infection. Ongoing periodontal maintenance at three to four month intervals helps prevent disease recurrence and maintains the improvements achieved through your deep cleaning treatment.",
    
    "wisdom-teeth": "Recovery from wisdom tooth extraction typically takes three to seven days, during which we recommend soft foods, gentle rinsing, and prescribed pain management. We provide detailed post-operative instructions and are available for any questions or concerns during your recovery. Most patients return to normal activities within a few days, though complete bone healing takes several weeks. Our team follows up to ensure proper healing and address any complications promptly. Early evaluation of wisdom teeth during the teenage years allows us to plan extraction at the optimal time when recovery is fastest.",
    
    "extractions": "Post-extraction care is crucial for proper healing and preventing complications such as dry socket. We provide comprehensive aftercare instructions including guidance on managing discomfort, maintaining the blood clot, dietary recommendations, and activity restrictions. Most extraction sites heal completely within one to two weeks, with full bone regeneration occurring over several months. We discuss tooth replacement options before extraction so you can plan for restoration of function and appearance. Whether you choose a dental implant, bridge, or partial denture, we ensure seamless continuity of care throughout your treatment journey.",
    
    "sleep-apnea": "Compliance with oral appliance therapy is significantly higher than CPAP therapy, with studies showing that patients wear their dental devices more consistently because they are comfortable, portable, and silent. Unlike CPAP machines, oral appliances require no electricity, make no noise, and fit easily in a travel case, making them ideal for patients who travel frequently. We work collaboratively with your sleep physician to monitor treatment effectiveness through follow-up sleep studies. Regular dental follow-up ensures your appliance continues to fit properly and your jaw joints remain comfortable with long-term use.",
    
    "sealants": "Research consistently demonstrates that sealed teeth are 80% less likely to develop cavities compared to unsealed teeth. The investment in sealants is minimal compared to the cost of treating cavities with fillings, crowns, or root canals that might otherwise develop in unprotected teeth. We check sealant integrity at every regular dental visit and can quickly repair or reapply them if any wear is detected. For families in the Livingston area, sealants represent one of the smartest preventive investments you can make in your children's long-term dental health and overall wellbeing.",
    
    "mouth-guards": "We also fabricate mouth guards for patients with special dental situations including braces, dental implants, and bridges. These specialized guards provide protection while accommodating existing dental work. For young athletes whose jaws are still growing, we recommend annual evaluation and replacement to ensure continued proper fit. Our guards are made from FDA-approved materials that are hypoallergenic and free of harmful chemicals. The investment in a custom mouth guard is minimal compared to the cost of treating dental injuries, which can easily run into thousands of dollars for emergency treatment and restoration.",
    
    "night-guards": "Many patients find that their custom night guard not only protects their teeth but actually improves their sleep quality by reducing the muscle tension and jaw clenching that can disrupt restful sleep. Some patients also notice improvement in related symptoms such as tinnitus, neck pain, and shoulder tension as their jaw muscles learn to relax with consistent guard use. We recommend wearing your guard every night for maximum benefit and bringing it to each dental appointment so we can check for wear patterns and ensure it continues to fit properly as your dental situation may change over time.",
    
    "tmj-treatment": "For patients whose TMJ symptoms are related to stress and anxiety, we incorporate relaxation techniques and mindfulness strategies into their treatment plan. Biofeedback, progressive muscle relaxation, and awareness of daytime clenching habits all contribute to reducing the muscle tension that drives many TMJ disorders. We also evaluate lifestyle factors such as posture, sleep position, and dietary habits that may contribute to jaw strain. Our holistic approach recognizes that TMJ disorders often have multiple contributing factors, and addressing all of them simultaneously produces the most complete and lasting relief.",
    
    "occlusal-adjustment": "Following occlusal adjustment, patients often notice improvements not only in jaw comfort but also in their overall dental health. Teeth that were previously bearing excessive force are now protected from further wear and potential fracture. Restorations such as crowns and fillings last longer when bite forces are evenly distributed. We may recommend a follow-up adjustment after a few weeks, as muscles adapt to the new bite relationship and additional fine-tuning may be beneficial. The cumulative effect of proper occlusal balance is a more comfortable, functional, and longer-lasting dentition.",
    
    "advanced-technology": "Patient comfort is enhanced through every technological advancement in our office. Digital impressions eliminate the gagging and discomfort of traditional impression materials. Laser treatments reduce the need for anesthesia and stitches. Digital X-rays are faster and require less time with uncomfortable film holders in your mouth. Our commitment to staying current with dental technology reflects our belief that every patient deserves access to the best tools available. We regularly attend continuing education courses and invest in new equipment to ensure that our Livingston dental practice remains at the forefront of modern dentistry.",
}

# Read the file
with open('client/src/data/serviceData.ts', 'r') as f:
    content = f.read()

# For each service that needs expansion, add the paragraph before the closing backtick of its details
for service_key, additional_text in ADDITIONAL_PARAGRAPHS.items():
    # Find the details block for this service
    # Pattern: find the last paragraph before the closing backtick
    # We need to insert the additional paragraph before the closing backtick
    
    # Find the service entry
    service_start = content.find(f'  "{service_key}":')
    if service_start == -1:
        print(f"WARNING: Could not find service '{service_key}'")
        continue
    
    # Find the details field within this service
    details_start = content.find("details: `", service_start)
    if details_start == -1:
        print(f"WARNING: Could not find details for '{service_key}'")
        continue
    
    # Find the closing backtick for this details block
    # Start searching after "details: `"
    search_start = details_start + len("details: `")
    details_end = content.find("`,", search_start)
    if details_end == -1:
        print(f"WARNING: Could not find end of details for '{service_key}'")
        continue
    
    # Insert the additional paragraph before the closing backtick
    # The content at details_end is the backtick
    insertion_point = details_end
    new_content = content[:insertion_point] + "\n\n" + additional_text + content[insertion_point:]
    content = new_content
    print(f"Expanded '{service_key}'")

# Write the file back
with open('client/src/data/serviceData.ts', 'w') as f:
    f.write(content)

print("\nDone! Verifying word counts...")

# Verify
pattern = r'details:\s*`(.*?)`'
matches = re.findall(pattern, content, re.DOTALL)
keys = re.findall(r'^\s+"([a-z-]+)":\s*\{', content, re.MULTILINE)
all_pass = True
for k, m in zip(keys, matches):
    words = len(m.split())
    status = "OK" if words >= 500 else "NEEDS MORE"
    if words < 500:
        all_pass = False
    print(f"  {k}: {words} words [{status}]")

if all_pass:
    print("\nAll services have 500+ words!")
else:
    print("\nSome services still need expansion.")
