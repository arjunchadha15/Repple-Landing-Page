Testing Deep Links                                                                                             
                                                                                                                 
  Without a deployed app (Simulator/TestFlight):                                                                 
                                                                                                                 
  1. Simulator via Terminal:                                                                                     
  # Custom URL scheme                                                                                            
  xcrun simctl openurl booted "repple://profile/friends"                                                         
  xcrun simctl openurl booted "repple://team/join/ABC123"                                                        
                                                                                                                 
  # Or test specific actions                                                                                     
  xcrun simctl openurl booted "repple://workout/start"                                                           
  2. Physical device (TestFlight):                                                                               
    - Create a test HTML page with links:                                                                        
  <a href="repple://profile/friends">Open Friends</a>                                                            
  <a href="https://repple.app/join/ABC123">Join Team</a>                                                         
    - Open it in Safari and tap the links                                                                        
  3. Notes App trick:                                                                                            
    - Type repple://profile/friends in Notes                                                                     
    - Tap the link to test                                                                                       
                                                                                                                 
  For Universal Links (https://repple.app/):                                                                     
                                                                                                                 
  You'll need to configure:                                                                                      
  1. Apple Associated Domains entitlement in Xcode: applinks:repple.app                                          
  2. apple-app-site-association file on your server at https://repple.app/.well-known/apple-app-site-association