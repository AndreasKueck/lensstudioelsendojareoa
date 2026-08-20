// Deinen vorhandenen Block hier stehen lassen:
// const listo = `...`;

// @input Component.Text outputText

// Achtung:
// In Lens Studio ist getTouchPosition() normalerweise normalisiert.
// Falls bei dir oben/unten vertauscht ist, siehe Kommentar in onTouchStart().

const listo = `2310 0000-2400 AUS Shortwave Australia E AUS be
2355 0000-2400 irr AUS Tropical R.Program 4TRP E AUS kr
3265 0000-0100 Sa USA WBCQ The Planet E NAm q
3940 1900-0400 irr RUS Music Wave Radio R EEu k
3955 0700-2000 D Channel 292 D,E Eu r
3955 2100-0459 D Channel 292 D,E Eu r
3955 2000-2100 KOR KBS World Radio D Eu /G-w
3965 0000-2400 DNK World Music Radio E Eu hv
3975 1500-2200 D Shortwave Radio Gold D,E WEu wa
3975 2200-2400 D Shortwave Radio Gold D,E WEu wa
3985 1500-2400 Fr-Sa HOL Radio Delta Int. NL Eu e
3995 0000-0300 EQA HCJB Voice of Andes D CEu /D-we
3995 0300-0400 EQA HCJB Voice of Andes R CEu /D-we
3995 0400-2200 EQA HCJB Voice of Andes D CEu /D-we
3995 2200-2400 EQA HCJB Voice of Andes R CEu /D-we
4765 0030-0400 CUB Radio Progreso S Car b
4835 0000-2400 AUS Shortwave Australia E AUS be
4840 0000-1200 USA WWCR 3 Nashville, TN E NAm n
4930 1200-1400 Tu,Fr USA Voice of America E Af /BOT
4940 0530-0700 Tu,Fr USA Voice of America E SAf /BOT
4970 0000-2400 irr AUS Radio 567 E AUS be
5010 0000-0030 CZE Radio Prague S Car /USA-o
5010 0230-0300 CZE Radio Prague S Car /USA-o
5010 0030-0100 SVK Radio Slovakia Int. S Car /USA-o
5010 0200-0230 TWN Radio Taiwan Int. S Car /USA-o
5010 0100-0200 USA WRMI Radio Miami Int. E Car o
5010 2300-2400 USA WRMI Radio Miami Int. E Car o
5025 0000-2400 irr CUB Radio Rebelde S Car q
5045 0400-2400 AUS Bay Islands Radio E AUS ri
5050 0000-0100 Su USA America250 DueDiligence E CAm o
5050 0000-0400 USA WRMI Radio Miami Int. E CAm o
5055 0500-1100 AUS 4DX Radio E AUS sj
5900 0600-1700 HOL Radio Horizon NL Eu
5900 1900-1930 TWN Radio Taiwan Int. D Eu /BUL-s
5900 1800-1900 USA Brother Stair E Eu /BUL-s
5900 2005-0500 USA Brother Stair E Eu /BUL-s
5910 0000-2400 CLM Alcaravan Radio E SAm pl
5910 1430-1500 ROU Radio Romania Int. ARO SEE s
5910 1530-1600 ROU Radio Romania Int. SR SEE s
5910 1630-1700 ROU Radio Romania Int. ARO SEE s
5910 1730-1800 ROU Radio Romania Int. SR SEE s
5910 1830-1900 ROU Radio Romania Int. ARO SEE s
5910 1930-2000 ROU Radio Romania Int. SR SEE s
5920 0000-0100 EQA HCJB Voice of Andes S CEu /D-we
5920 0100-0300 EQA HCJB Voice of Andes D CEu /D-we
5920 0300-0400 EQA HCJB Voice of Andes R CEu /D-we
5920 0400-2200 EQA HCJB Voice of Andes D CEu /D-we
5920 1800-1830 EQA HCJB Voice of Andes D-P CEu /D-we
5920 2200-2300 EQA HCJB Voice of Andes R CEu /D-we
5920 2300-2400 EQA HCJB Voice of Andes S CEu /D-we
5920 0130-0600 USA WTWW Lebanon, TN E NAm L
5930 0000-2400 DNK World Music Radio E Eu br
5935 0000-1200 USA WWCR 2 Nashville, TN E NAm n
5950 2300-0400 USA WRMI Radio Miami Int. E ENA o
5975 2200-2300 CHN China Radio Int. M SAf b
5985 1600-1700 CHN China Radio Int. SWA EAf b
5985 1700-1800 CHN China Radio Int. SWA EAf b
5985 1900-2000 CHN China Radio Int. P SAf b
5985 2000-2100 CHN China Radio Int. E SAf b
5990 0000-0100 CHN China Radio Int. S Car /CUB
5990 2300-2400 CHN China Radio Int. E CAm /CUB
5990 1000-1600 irr D Studio 52 Eu n
5990 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
5995 0550-0800 MLI Radio Mali BM WAf k
5995 0630-0645 MLI Radio Mali F WAf k
5995 1800-0001 MLI Radio Mali BM WAf k
5995 1850-1905 Sa MLI Radio Mali E WAf k
6000 0000-0600 CUB Radio Habana Cuba E ENA q
6000 1100-1300 CUB Radio Habana Cuba S CNA q
6000 1300-1400 CUB Radio Habana Cuba S CNA q
6000 2300-2400 Mo-Fr CUB Radio Habana Cuba S ENA q
6005 0630-2100 SaSu FIN RealMix Radio Eu r
6005 1900-1930 TWN Radio Taiwan Int. F Eu /BUL-s
6020 1900-2000 CHN China Radio Int. AL SEE s
6020 2000-2100 CHN China Radio Int. PO Eu s
6020 0500-1100 SaSu HOL Radio Casanova NL Eu w
6030 0253-2015 ETH Radio Oromiya OO EAf j
6040 0000-0600 ALG Ifrikya FM A WAf o
6045 1100-1400 irr D Radio 60 Eu n
6045 0800-0900 irr XUU Various Stations Eu /D-n
6050 0000-0030 EQA HCJB Voice of Andes COF SAm c
6050 0030-0100 EQA HCJB Voice of Andes WAO SAm c
6050 0100-0130 Su-Mo EQA HCJB Voice of Andes Q SAm c
6050 0100-0130 Tu-Sa EQA HCJB Voice of Andes S SAm c
6050 0130-0235 EQA HCJB Voice of Andes Q SAm c
6050 0235-0500 EQA HCJB Voice of Andes S SAm c
6050 0923-1100 EQA HCJB Voice of Andes Q SAm c
6050 1100-1403 EQA HCJB Voice of Andes S SAm c
6050 2100-2130 EQA HCJB Voice of Andes S SAm c
6050 2130-2200 EQA HCJB Voice of Andes CHA SAm c
6050 2200-2330 EQA HCJB Voice of Andes Q SAm c
6050 2330-2400 EQA HCJB Voice of Andes SUA SAm c
6050 0555-1000 LBR ELWA Radio E WAf
6050 1700-2232 LBR ELWA Radio E WAf
6055 1030-1100 SaSu D Evang.Missionsgemeinden D Eu n
6060 1645-1900 HOL Radio Casanova NL Eu w
6065 0300-0400 USA Adventist World Radio MSY EAf /MDG
6065 1500-1600 USA Adventist World Radio MSY EAf /MDG
6070 0000-2400 CAN CFRX Toronto, CFRB 1010 E NAm t
6070 0000-2400 D Channel 292 D,E Eu r
6085 0700-1700 E Radio Mi Amigo CEu /D-k
6090 1900-1930 CHN China Radio Int. RO EEu u
6090 1930-2000 CHN China Radio Int. RO EEu u
6090 0252-2100 ETH Amhara State Radio AH EAf j
6090 2000-2100 KOR KBS World Radio A NAf /G-w
6095 1100-1200 2.Su D SM Radio Dessau D Eu n
6095 1200-1300 10Oct D SM Radio Dessau D Eu n
6095 0800-0900 1.Su D Welle 370 D Eu n
6110 0255-2101 ETH Fana Broadcasting Corp. AH EAf j
6115 1000-1200 SaSu D Radio SE-TA2 D Eu ge
6120 0530-0630 irr F TDF DIGITAL F Af i
6130 0000-2400 HOL Radio Europa NL WEu a
6135 0530-0600 G BBC HA WAf /ASC
6135 1651-1758 NZL RNZ Pacific E Oc r
6135 1710-1720 Mo-Fr NZL RNZ Pacific COK Oc r
6140 1500-2200 BEL Radio Onda F Eu /LUX-j
6140 1800-2000 CTI Radio Augusta Int. E WEu /LUX-j
6140 0500-1500 SUI Radio Gloria D Eu /LUX-j
6140 1330-1400 SVK Radio Slovakia Int. D Eu /LUX-j
6145 1900-2000 KOR KBS World Radio F Eu /G-w
6150 0400-0600 irr D Europa24 D Eu dt
6150 0600-1600 D Europa24 D Eu dt
6160 0700-1500 Fr-Su D Shortwave Radio Gold D,E WEu wa
6160 1500-2200 D Shortwave Radio Gold D,E WEu wa
6160 0000-0100 Sa USA WBCQ The Planet E NAm q
6160 1600-2400 USA WBCQ The Planet E NAm q
6165 0430-0450 J NHK Radio Japan R EEu /D-n
6170 0000-1800 1.Sa FIN Scandinavian Weekend R. FI Eu v
6170 1800-2100 1.Sa FIN Scandinavian Weekend R. FI Eu v
6170 2100-2400 1.Fr FIN Scandinavian Weekend R. FI Eu v
6180 0600-0630 D DWD Pinneberg D Eu pi
6180 1200-1230 D DWD Pinneberg D Eu pi
6180 1600-1630 D DWD Pinneberg D Eu pi
6180 2000-2030 D DWD Pinneberg D Eu pi
6185 2200-1200 MEX Radio Educación S CAm e
7205 1900-2000 CHN China Radio Int. P SAf x
7205 2000-2100 CHN China Radio Int. M SAf x
7205 2100-2200 CHN China Radio Int. E SAf x
7210 1800-1900 CHN China Radio Int. R EEu u
7210 1800-1900 KRE Voice of Korea F SAf u
7210 1900-2000 KRE Voice of Korea E SAf u
7210 2000-2050 KRE Voice of Korea KCBS K SAf u
7210 1100-1130 TUR Voice of Turkey BU SEE e
7215 1700-1800 CHN China Radio Int. SWA EAf x
7215 0000-2400 HOL SunDance Radio NL Eu n
7220 1000-1500 HOL SunDance Radio NL Eu n
7220 2200-2300 ROU Radio Romania Int. E WEu g
7225 0000-2400 HOL SunDance Radio NL Eu n
7245 1228-1258 Mo-Fr AUS ABC Wantok TP WOc /NZL-r
7245 1600-1700 CHN China Radio Int. SWA EAf x
7245 1900-2000 CHN China Radio Int. R EEu a
7245 2000-2100 CHN China Radio Int. R EEu a
7245 1059-1358 SaSu NZL RNZ Pacific E Oc r
7250 0710-0820 Su CVA Radio Vaticana RO EEu
7255 2000-2100 CHN China Radio Int. M NAf ka
7255 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
7260 2200-2300 CHN China Radio Int. P SEu u
7260 0100-0200 TUR Voice of Turkey S SAm e
7265 1700-1800 CHN China Radio Int. R EEu u
7265 1830-1900 CHN China Radio Int. BU SEE u
7265 1930-2030 CHN China Radio Int. EO Eu u
7265 2030-2130 CHN China Radio Int. I SEu u
7265 0000-2400 HOL Radio Europa NL Eu a
7275 1900-2000 I IRRS Milano E Eu /BUL-s
7275 1600-1700 KOR KBS World Radio K Eu k
7275 0300-0400 TUR Voice of Turkey E ENA e
7290 1800-1900 I IRRS Milano E Eu /BUL-s
7295 1900-2000 CHN China Radio Int. E WAf u
7295 2000-2100 CHN China Radio Int. E WAf u
7300 2100-2115 AUS HCJB R.Akhbar Mufriha TAH NAf /G-w
7300 2115-2145 Su AUS HCJB R.Akhbar Mufriha A NAf /G-w
7305 2000-2100 CHN China Radio Int. PO Eu u
7305 0100-0130 CVA Radio Vaticana P SAm
7305 0130-0200 CVA Radio Vaticana S Car
7305 0530-0600 G BBC HA WAf /ASC
7305 0600-0630 G BBC F WAf /ASC
7310 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
7325 2000-2030 CHN China Radio Int. SR SEE u
7325 2100-2130 CHN China Radio Int. SR Eu x
7325 2100-2200 CHN China Radio Int. E SAf b
7325 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
7330 1700-1800 CHN China Radio Int. E EAf j
7340 1800-1900 CHN China Radio Int. I SEu ka
7345 2030-2130 CHN China Radio Int. I SEu ka
7350 0000-0100 CHN China Radio Int. E Eu ka
7350 2300-2400 CHN China Radio Int. E Eu ka
7360 1730-1830 TUR Voice of Turkey F CAf e
7370 0700-1300 Tu,Th USA Voice of America E EEu /D-L
7380 2000-2030 Su USA Follow the Bible Min. A NAf /G-w
7385 1900-2000 CHN China Radio Int. AL SEE ka
7390 2000-2030 CHN China Radio Int. SR Eu x
7390 2030-2100 CHN China Radio Int. HU Eu j
7400 1900-2100 9Aug HOL Free Radio Sce Holland E Eu xx
7400 0000-2400 HOL Radio Piepzender NL Eu zw
7415 1900-1930 CHN China Radio Int. CZ WEu u
7415 1930-2000 CHN China Radio Int. CZ WEu u
7415 2000-2100 CHN China Radio Int. E Eu ka
7415 2100-2200 CHN China Radio Int. E Eu ka
7425 1651-1758 Su-Fr NZL RNZ Pacific DIGITAL E Oc r
7425 1710-1720 Mo-Fr NZL RNZ Pacific DIGITAL COK Oc r
7425 1759-1858 Su-Fr NZL RNZ Pacific DIGITAL E Oc r
7425 1840-1850 Su-Th NZL RNZ Pacific DIGITAL SM Oc r
7425 1852-1858 Mo-Fr NZL RNZ Pacific DIGITAL NIU Oc r
7430 2200-2300 CHN China Radio Int. M EAf j
7435 1800-1900 CHN China Radio Int. I SEu j
7435 1900-1930 CHN China Radio Int. HU Eu x
7435 1930-2000 CHN China Radio Int. RO EEu x
7435 2145-1030 VTN Voice of Vietnam 1 VN Oc s
7440 1359-1650 NZL RNZ Pacific E Oc r
7445 2100-2130 CHN China Radio Int. SR SEE k
7445 2130-2200 CHN China Radio Int. HU Eu u
9400 1945-2000 CAN Bible Voice Dardasha-7 A NAf /BUL-s
9410 1700-1800 CHN China Radio Int. HR SEu ka
9410 2200-2300 CHN China Radio Int. P SAm ka
9410 1900-2000 EGY Radio Cairo D WEu a
9410 0500-0600 G BBC E WAf /ASC
9410 0600-0700 G BBC E WAf w
9425 1400-1600 KRE Voice of Korea R Eu u
9425 1600-1700 KRE Voice of Korea D Eu u
9425 1700-1800 KRE Voice of Korea R Eu u
9425 1800-1900 KRE Voice of Korea D Eu u
9425 1900-2000 KRE Voice of Korea D Eu u
9425 2000-2050 KRE Voice of Korea KCBS K Eu u
9435 1300-1400 KRE Voice of Korea E NAm u
9435 1400-1500 KRE Voice of Korea F NAm u
9435 1500-1600 KRE Voice of Korea E NAm u
9435 1600-1700 KRE Voice of Korea F NAm u
9435 1700-1750 KRE Voice of Korea KCBS K NAm u
9440 0600-0630 G BBC F CAf /ASC
9440 0630-0700 G BBC HA WAf /ASC
9455 2300-2400 irr ARG R.Argentina al Exterior P CAm /USA-o
9455 2300-0400 USA WRMI Radio Miami Int. E CAm o
9460 1600-2100 TUR Voice of Turkey TU Eu e
9470 1800-1900 EGY Radio Cairo I Eu a
9475 2000-2400 USA WTWW Lebanon, TN E NAm L
9480 1800-2000 CHN China Radio Int. F Eu x
9480 2000-2100 J NHK Radio Japan J Oc y
9490 2200-2300 CHN China Radio Int. M SAf b
9490 1200-1300 ROU Radio Romania Int. RO CEu s
9500 0300-0700 ALG Ifrikya FM A CAf b
9500 0400-0500 ROU Radio Romania Int. RO WEu g
9500 1800-1900 ROU Radio Romania Int. RO WEu g
9500 1900-2000 ROU Radio Romania Int. RO WEu g
9500 1802-1832 Su SWZ Trans World Radio E EAf
9510 0100-0130 CHN CRI DIGITAL M Oc k
9510 0230-0300 CHN CRI DIGITAL M Oc k
9510 0800-0900 Sa I IRRS Milano E Eu /ROU-s
9510 0930-1200 Su I IRRS Milano E Eu /ROU-s
9510 0430-0500 ROU Radio Romania Int. R EEu t
9515 1900-1930 CHN China Radio Int. CZ WEu s
9515 1500-1700 KOR KBS World Radio E Eu k
9515 1700-1800 KOR KBS World Radio K Eu k
9525 1900-2000 CHN China Radio Int. R EEu b
9525 2000-2100 CHN China Radio Int. R EEu b
9530 1000-1600 Su G Radio Nova Int, E WEu /LUX-j
9535 1600-1800 CHN China Radio Int. D Eu a
9535 1900-2000 CHN China Radio Int. P SAf a
9540 1100-1200 CHN China Radio Int. CA Oc b
9540.1 1600-1615 S IBRA Radio AH EAf /UAE
9540.1 1615-1630 Th-Su S IBRA Radio Ibrahim AH EAf /UAE
9540.1 1615-1630 Mo-We S IBRA Radio Ibrahim GUR EAf /UAE
9540.1 1630-1700 S IBRA Radio Ibrahim AH EAf /UAE
9540.1 1700-1730 S IBRA Radio OO EAf /UAE
9540.1 1730-1800 S IBRA Radio TIG EAf /UAE
9540.1 1800-1830 S IBRA Radio TIG EAf /UAE
9540 0500-0600 TCD Radio Ndarason Int. KNU WAf /G-w
9550 0100-0200 ROU Radio Romania Int. F ENA t
9560 1900-1930 CHN China Radio Int. HU Eu u
9570 1100-1200 CHN China Radio Int. CA Oc k
9570 1200-1250 CHN China Radio Int. CA ENA /CUB
9570 1600-1700 CHN China Radio Int. E SAf b
9570 1700-1800 CHN China Radio Int. E SAf b
9570 1800-1900 ROU Radio Romania DIGITAL D CEu t
9575 1900-2000 CHN China Radio Int. CA Eu b
9575 2000-2030 ROU Radio Romania Int. F WEu g
9580 0100-0200 CHN China Radio Int. E ENA /CUB
9580 0200-0300 CHN China Radio Int. M ENA /CUB
9585 2000-2030 CHN China Radio Int. SR SEE ka
9585 2030-2100 CHN China Radio Int. HU Eu ka
9585 1900-1930 Su USA Follow the Bible Min. E SAf /ASC
9600 1800-1900 CHN China Radio Int. E Eu b
9600 2000-2100 CHN China Radio Int. E Eu ka
9600 2100-2200 CHN China Radio Int. E Eu ka
9605 1600-1700 CHN China Radio Int. R EEu b
9605 1700-1800 CHN China Radio Int. R EEu s
9610 1100-1200 CHN China Radio Int. M Oc k
9620 1930-2030 IND AIR Akashvani Ext.Sce F Eu b
9620 2000-2015 irr IND AIR Akashvani Ext.Sce E Eu b
9635 0800-1800 MLI Radio Mali BM WAf k
9635 1030-1530 VTN Voice of Vietnam 1 VN Oc s
9635 2200-1030 VTN Voice of Vietnam 1 VN Oc s
9640 2100-2300 CHN China Radio Int. S SEu ka
9645 1830-2030 CHN China Radio Int. F WAf k
9650 2300-2400 CUB Radio Habana Cuba S Car b
9650 0600-0630 ROU Radio Romania Int. D CEu t
9655 2000-2100 KOR KBS World Radio F WAf /ASC
9670 0000-2400 D Channel 292 D,E Eu r
9670 0900-1000 Su D Radio DARC D Eu r
9685 1730-1830 CHN China Radio Int. M Eu u
9685 2200-2300 CHN China Radio Int. P SAm ka
9690 2000-2100 USA PanAmerican Broadc. E Oc /F-i
9700 2200-0700 ALG Ifrikya FM A WAf o
9700 0800-0830 Mo-Fr AUS ABC Wantok TP Oc /NZL-r
9700 0659-1058 NZL RNZ Pacific E Oc r
9700 0725-0735 Mo-Fr NZL RNZ Pacific SLM Oc r
9700 0830-0840 Th NZL RNZ Pacific F Oc r
9700 1759-1858 NZL RNZ Pacific E Oc r
9700 1840-1850 Su-Th NZL RNZ Pacific SM Oc r
9700 1852-1858 Mo-Fr NZL RNZ Pacific NIU Oc r
9700 0600-0630 ROU Radio Romania Int. D CEu t
9705 2000-2030 CVA Radio Vaticana E CAf
9705 2030-2100 CVA Radio Vaticana F CAf
9710 0000-0100 CHN China Radio Int. P SAm ka
9710 0000-0100 CUB Radio Habana Cuba E ENA
9710 0100-0200 CUB Radio Habana Cuba F ENA
9710 0200-0300 CUB Radio Habana Cuba E ENA
9710 0200-0300 CUB Radio Habana Cuba P ENA
9710 0300-0400 CUB Radio Habana Cuba E ENA
9710 0400-0430 CUB Radio Habana Cuba CR ENA
9710 0430-0500 CUB Radio Habana Cuba P ENA
9710 0500-0700 CUB Radio Habana Cuba S ENA
9710 0500-0700 CUB Radio Habana Cuba E ENA
9710 0600-0630 Su CUB Radio Habana Cuba EO ENA
9710 1100-1300 CUB Radio Habana Cuba S Car b
9710 1300-1400 CUB Radio Habana Cuba S Car b
9710 1400-1500 CUB Radio Habana Cuba S Car b
9710 2300-2400 CUB Radio Habana Cuba S Car b
9710 0440-0500 CVA Radio Vaticana UK EEu
9710 0500-0520 CVA Radio Vaticana R EEu
9710 0605-0700 Su CVA Radio Vaticana UK EEu
9710 0710-0820 Su CVA Radio Vaticana RO EEu
9710 1640-1700 CVA Radio Vaticana UK EEu
9710 1700-1720 CVA Radio Vaticana BY EEu
9720 2030-2100 CHN China Radio Int. BU SEE u
9730 1600-1700 CHN China Radio Int. R EEu s
9730 1900-2000 CHN China Radio Int. P SEu ka
9730 0100-0200 ROU Radio Romania Int. RO ENA g
9740 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
9740 1700-1800 KOR KBS World Radio S Eu k
9740 0400-0500 ROU Radio Romania Int. RO WEu g
9740 2030-2100 ROU Radio Romania Int. E WEu g
9740 2200-2300 ROU Radio Romania Int. E WEu g
9745 1930-2030 CHN China Radio Int. EO Eu ka
9750 1730-1800 S IBRA Radio SLT EAf /UAE
9750 1830-1930 TUR Voice of Turkey E Eu e
9755 0200-0400 MDG MWV La Voz Alegre S SAm m
9760 1200-1300 CHN China Radio Int. E Oc k
9765 1800-1900 CHN China Radio Int. R EEu s
9765 0600-0630 G BBC F NAf w
9765 2100-2300 MDG MWV Palavra Alegre P SAm m
9770 1600-1700 CHN China Radio Int. HK SAf u
9770 1700-1800 CHN China Radio Int. CA SAf x
9770 0400-0600 TUR Voice of Turkey TU Eu e
9780 1730-1750 Mo-Fr G BBC AH EAf /OMA-a
9780 1750-1810 Mo-Fr G BBC OO EAf /OMA-a
9780 1810-1830 Mo-Fr G BBC TIG EAf /OMA-a
9780 1830-1850 Mo-Fr G BBC AH EAf /OMA-a
9780 1850-1910 Mo-Fr G BBC OO EAf /OMA-a
9780 1910-1930 Mo-Fr G BBC TIG EAf /OMA-a
9780 1859-1958 Su-Fr NZL RNZ Pacific DIGITAL E Oc r
9780 1940-1950 Su-Th NZL RNZ Pacific DIGITAL TO Oc r
9790 0300-0400 CHN China Radio Int. E WNA /CUB
9790 0400-0500 CHN China Radio Int. CA WNA /CUB
9790 2000-2100 F Radio France Int. F WAf i
9790 2100-2200 F Radio France Int. F WAf i
9790 1700-1730 TWN Radio Taiwan Int. R EEu /BUL-s
9800 1300-1400 CHN China Radio Int. E Oc k
9800 1700-1800 CHN China Radio Int. CA SAf u
9820 1700-1730 We CZE Radio Prague R EEu /UAE
9820 1900-1930 Fr CZE Radio Prague R EEu /UAE
9820 1700-1730 Mo E Radio Exterior España R EEu /UAE
9820 1900-1930 Sa E Radio Exterior España R EEu /UAE
9820 1700-1730 Su G BBC R EEu /UAE
9820 1700-1800 Sa G BBC R EEu /UAE
9820 1700-2000 RUS WRN Vsemirnaya Radioset R EEu /UAE
9820 1930-2000 SVK Radio Slovakia Int. R EEu /UAE
9820 1730-1800 Mo UN United Nations Radio R EEu /UAE
9820 1800-1830 Su UN United Nations Radio R EEu /UAE
9830 2215-2330 EGY Radio Cairo P SAm a
9830 1920-2020 IRN IRIB Voice of I.R.Iran E SAf s
9835 1920-2020 IRN IRIB Voice of I.R.Iran E SAf s
9835 1600-1630 VTN Voice of Vietnam E Eu s
9835 1630-1700 VTN Voice of Vietnam R Eu s
9835 1700-1800 VTN Voice of Vietnam VN Eu s
9835 1800-1830 VTN Voice of Vietnam S Eu s
9835 1830-1900 VTN Voice of Vietnam D Eu s
9835 1900-1930 VTN Voice of Vietnam E Eu s
9835 1930-2000 VTN Voice of Vietnam F Eu s
9835 2000-2030 VTN Voice of Vietnam D Eu s
9835 2030-2100 VTN Voice of Vietnam F Eu s
9835 2100-2130 VTN Voice of Vietnam S Eu s
9835 2130-2200 VTN Voice of Vietnam E Eu s
9840 1730-1830 TUR Voice of Turkey D CEu e
9845 1900-2000 MDG MWV New Life Station R EEu m
9850 2000-2115 EGY Radio Cairo F WEu a
9860 0730-0800 CHN CRI DIGITAL M Oc k
9860 0830-0900 CHN CRI DIGITAL M Oc k
9865 2300-2400 CHN China Radio Int. M Eu u
9870 1500-1600 EGY Radio Cairo AL Eu a
9870 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
9870 0000-0200 TUR Voice of Turkey S SAm e
9880 2200-2300 CHN China Radio Int. EO SAm ka
9880 1930-2030 TUR Voice of Turkey F WAf e
9885 2330-0045 EGY Radio Cairo A SAm a
9885 1800-1900 MDG MWV New Life Station R EEu m
9890 1900-2000 EGY Radio Cairo R EEu a
9890 2115-2215 EGY Radio Cairo E WEu a
9890 0430-0500 ROU Radio Romania Int. R EEu t
9900 0045-0200 EGY Radio Cairo S SAm a
9900 1700-1900 EGY Radio Cairo TU ME a
11600 0400-0500 USA Brother Stair E Eu /BUL-s
11600 1600-1700 USA Brother Stair E Eu /BUL-s
11610 1500-1600 CHN China Radio Int. E NAf ka
11610 2100-2200 MDG MWV The Light of Life M WEu m
11610 2200-2300 MDG MWV Radio Feda A NAf m
11610 1900-2000 Su USA Follow the Bible Min. F Af /G-w
11615 2000-2100 Tu,Th D Music 4 Joy DIGITAL WAf n
11620 0000-0100 ROU Radio Romania Int. E ENA t
11620 0100-0200 ROU Radio Romania Int. F ENA t
11620 0300-0400 ROU Radio Romania Int. E WNA t
11630 1400-1430 S IBRA Radio TIG EAf /UAE
11640 0600-0630 CHN CRI DIGITAL M Oc k
11640 1830-1930 CHN China Radio Int. A EAf /MLI
11640 1930-2000 CHN China Radio Int. P EAf /MLI
11640 2000-2100 CHN China Radio Int. E EAf /MLI
11640 2100-2130 CHN China Radio Int. E EAf /MLI
11640 1700-1800 Test XUU Unknown Station TIG EAf /MDG
11650 1030-1045 Tu-Th AUS Reach Beyond Australia K FE ku
11650 1030-1100 Fr-Mo AUS Reach Beyond Australia K FE ku
11650 1045-1100 Tu-Th AUS Reach Beyond Australia E FE ku
11650 1700-1800 CHN China Radio Int. EO Eu x
11650 1800-2000 CHN China Radio Int. D WEu u
11650 0530-0600 ROU Radio Romania Int. E WEu t
11655 0600-0615 CAN Bible Voice A NAf /D-n
11655 1600-1630 S IBRA Radio Ibrahim AFA EAf /UAE
11660 1730-1830 CHN China Radio Int. M Eu s
11660 2030-2230 CHN China Radio Int. F SEu ka
11660 1930-2000 Sa-Th G BBC HA WAf /ASC
11660 1930-2030 Fr G BBC HA WAf /ASC
11660 1900-1930 Su USA Follow the Bible Min. E WAf /ASC
11680 1920-2020 IRN IRIB Voice of I.R.Iran E SAf s
11680 1800-1900 Test XUU Unknown Station TIG EAf /MDG
11690 0000-1800 1.Sa FIN Scandinavian Weekend R. FI Eu v
11690 2100-2400 1.Fr FIN Scandinavian Weekend R. FI Eu v
11695 1800-2000 CHN China Radio Int. F CAf ka
11700 0400-0500 F Radio France Int. F EAf i
11700 0500-0600 F Radio France Int. F CAf i
11700 0600-0700 F Radio France Int. F WAf i
11700 2030-2100 USA Adventist World Radio NIG WAf /D-n
11710 1000-1100 KRE Voice of Korea E LAm u
11710 1100-1200 KRE Voice of Korea F LAm u
11710 1200-1250 KRE Voice of Korea KCBS K LAm u
11710 1300-1400 KRE Voice of Korea E NAm u
11710 1400-1500 KRE Voice of Korea F NAm u
11710 1500-1600 KRE Voice of Korea E NAm u
11710 1600-1700 KRE Voice of Korea F NAm u
11710 1700-1750 KRE Voice of Korea KCBS K NAm u
11720 1800-2100 1.Sa FIN Scandinavian Weekend R. FI Eu v
11720 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
11720 1330-1700 VTN Voice of Vietnam 3 VN Oc s
11720 2145-1030 VTN Voice of Vietnam 4 VN Oc s
11725 1600-1800 CHN China Radio Int. D Eu x
11725 1859-1958 NZL RNZ Pacific E Oc r
11725 1940-1950 Su-Th NZL RNZ Pacific TO Oc r
11730 1400-1500 ROU Radio Romania Int. D CEu t
11730 2300-2400 ROU Radio Romania Int. S SAm g
11735 0300-0400 KRE Voice of Korea S LAm u
11735 0400-0500 KRE Voice of Korea E LAm u
11735 0500-0600 KRE Voice of Korea S LAm u
11735 0600-0700 KRE Voice of Korea F LAm u
11740 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
11740 1920-2020 IRN IRIB Voice of I.R.Iran E SAf s
11740 0500-0530 ROU Radio Romania Int. F WEu g
11750 1100-1200 CHN China Radio Int. M Oc b
11750 1900-2000 CHN China Radio Int. P SEu j
11750 1800-1900 ROU Radio Romania Int. D CEu t
11760 1200-1300 CHN China Radio Int. E Oc k
11760 1300-1400 CHN China Radio Int. E Oc k
11760 2200-2300 CHN China Radio Int. P Eu x
11760 0000-0100 CUB Radio Habana Cuba E Am b
11760 0100-0200 CUB Radio Habana Cuba CR Am b
11760 0232-0332 CUB Radio Habana Cuba E Am b
11760 0332-0400 CUB Radio Habana Cuba CR Am b
11760 0400-0430 CUB Radio Habana Cuba CR Am b
11760 0430-0500 CUB Radio Habana Cuba P Am b
11760 0500-0700 CUB Radio Habana Cuba S Am b
11760 0700-0800 CUB Radio Habana Cuba S Am b
11760 1100-1300 CUB Radio Habana Cuba S Am b
11760 1300-1500 CUB Radio Habana Cuba S Am b
11760 1500-1530 Su CUB Radio Habana Cuba EO Am b
11760 1500-1800 CUB Radio Habana Cuba S Am b
11760 1800-1830 CUB Radio Habana Cuba F Am b
11760 1830-1900 CUB Radio Habana Cuba CR Am b
11760 1900-2000 CUB Radio Habana Cuba E Am b
11760 2200-2300 CUB Radio Habana Cuba S Am b
11760 2300-2400 CUB Radio Habana Cuba S Am b
11770 2000-2100 CHN China Radio Int. E Eu x
11770 2100-2200 CHN China Radio Int. E Eu x
11785 2200-2300 TUR Voice of Turkey E ENA e
11790 1200-1400 CHN China Radio Int. M EAf ka
11790 1500-1600 CHN China Radio Int. R Eu u
11790 0430-0500 F Radio France Int. SWA EAf i
11790 0600-0630 F Radio France Int. HA WAf i
11790 2000-2100 F Radio France Int. F WAf i
11790 2100-2200 F Radio France Int. F WAf i
11795 1000-1100 KOR KBS World Radio E SAm k
11795 1100-1200 KOR KBS World Radio S SAm k
11795 1200-1300 KOR KBS World Radio S SAm k
11800 0000-0100 ROU Radio Romania Int. RO ENA g
11810 0300-0400 KOR KBS World Radio K SAm k
11810 2200-2300 KOR KBS World Radio E Eu k
11810 1500-1530 ROU Radio Romania Int. R EEu t
11815 0800-0830 CHN CRI DIGITAL M Oc k
11815 0440-0500 CVA Radio Vaticana UK EEu
11815 0500-0520 CVA Radio Vaticana R EEu
11815 1640-1700 CVA Radio Vaticana UK EEu
11820 0130-0200 CHN CRI DIGITAL M Oc k
11820 0200-0300 ROU Radio Romania Int. S CAm g
11825 1700-1800 CHN China Radio Int. HR SEu b
11825 2100-2200 CHN China Radio Int. HR SEu b
11825 0400-0500 MDG MWV African Pathways R. E CAf m
11830 0100-0300 CHN China Radio Int. S SAm ka
11830 2300-0100 CHN China Radio Int. S SAm ka
11830 0300-0400 ROU Radio Romania Int. E WNA g
11830 1600-1700 ROU Radio Romania Int. F WEu g
11850 1920-2020 IRN IRIB Voice of I.R.Iran E SAf s
11850 1500-1530 ROU Radio Romania Int. R EEu t
11850 1730-1800 Fr-Su TWN Radio Taiwan Int. F Eu s
11855 2200-2400 CHN China Radio Int. S SEu u
11860 1900-2050 J NHK Radio Japan J SAf y
11870 1840-1900 CVA Radio Vaticana Ros WAf
11870 2000-2030 CVA Radio Vaticana E WAf
11870 2030-2100 CVA Radio Vaticana F WAf
11870 2100-2130 CVA Radio Vaticana P WAf
11870 0400-0500 irr F TDF DIGITAL F Af i
11875 1000-1100 CHN China Radio Int. CA Oc k
11875 1600-1700 CHN China Radio Int. R EEu u
11875 1700-1800 CHN China Radio Int. R EEu u
11875 1800-1830 G BBC F NAf /UAE
11875 0330-0400 KEN Radio Ergo SO EAf /UAE
11875 1445-1500 Mo SWZ Trans World Radio SO EAf
11875 1500-1530 SWZ Trans World Radio SO EAf
11875 1530-1545 Su SWZ Trans World Radio SO EAf
11880 0200-0300 CHN China Radio Int. M SAm ka
11880 1600-1700 CHN China Radio Int. HK SAf x
11880 0100-0130 CUB Radio Habana Cuba CR CAm
11880 0200-0300 CUB Radio Habana Cuba E CAm
11880 0500-0600 CUB Radio Habana Cuba E CAm
11880 1500-1530 Su CUB Radio Habana Cuba EO CAm
11880 1500-1800 CUB Radio Habana Cuba S CAm
11880 1800-1830 Mo-Sa CUB Radio Habana Cuba F CAm
11880 1800-1830 Su CUB Radio Habana Cuba A CAm
11880 1830-1900 CUB Radio Habana Cuba CR CAm
11880 1900-2000 CUB Radio Habana Cuba E CAm
11880 2000-2030 CUB Radio Habana Cuba F CAm
11880 2030-2100 CUB Radio Habana Cuba P CAm
11880 2100-2200 CUB Radio Habana Cuba E CAm
11880 2200-2300 CUB Radio Habana Cuba S CAm
11880 1400-1500 ROU Radio Romania Int. D CEu t
11885 1600-1630 VTN Voice of Vietnam E Eu s
11885 1630-1700 VTN Voice of Vietnam R Eu s
11885 1700-1800 VTN Voice of Vietnam VN Eu s
11885 1800-1830 VTN Voice of Vietnam S Eu s
11885 1830-1900 VTN Voice of Vietnam D Eu s
11885 1900-1930 VTN Voice of Vietnam E Eu s
11885 1930-2000 VTN Voice of Vietnam F Eu s
11885 2000-2030 VTN Voice of Vietnam D Eu s
11885 2030-2100 VTN Voice of Vietnam F Eu s
11885 2100-2130 VTN Voice of Vietnam S Eu s
11885 2130-2200 VTN Voice of Vietnam E Eu s
11895 1800-1900 CHN China Radio Int. AM SEu x
11895 1900-2000 CHN China Radio Int. CA Eu ka
11900 1130-1145 AUS Reach Beyond Australia ROH MYA ku
11900 1145-1200 AUS Reach Beyond Australia BR MYA ku
11900 1200-1230 AUS Reach Beyond Australia NLA MYA ku
11900 1230-1245 Mo,Th AUS Reach Beyond Australia BE SIn ku
11900 1230-1245 Sa AUS Reach Beyond Australia CHG SIn ku
11900 1230-1245 Tu AUS Reach Beyond Australia KUR SIn ku
11900 1230-1245 Su AUS Reach Beyond Australia TAM SIn ku
11900 1230-1245 We AUS Reach Beyond Australia TEL SIn ku
11900 1230-1245 Fr AUS Reach Beyond Australia UR SIn ku
11900 1245-1300 1345 AUS Reach Beyond Australia E SIn ku
11900 1245-1300 267 AUS Reach Beyond Australia TAM SIn ku
11900 1300-1315 AUS Reach Beyond Australia TAM SIn ku
11900 1315-1330 AUS Reach Beyond Australia KOR SIn ku
11900 1330-1345 AUS Reach Beyond Australia HI SIn ku
11900 1345-1400 AUS Reach Beyond Australia E SIn ku
11900 1400-1430 AUS Reach Beyond Australia BR MYA ku
11900 1600-1700 CHN China Radio Int. E EAf j
11900 0000-0100 ROU Radio Romania Int. E ENA t
11900 0500-0530 ROU Radio Romania Int. F WEu g
11905 0900-1000 CHN China Radio Int. E Oc j
11905 1000-1100 CHN China Radio Int. E Oc j
11910 1800-1900 KRE Voice of Korea F SAf u
11910 1900-2000 KRE Voice of Korea E SAf u
11910 2000-2050 KRE Voice of Korea KCBS K SAf u
11940 1600-1700 CHN China Radio Int. E Eu ka
11940 2030-2100 CHN China Radio Int. BU SEE k
11940 0200-0300 ROU Radio Romania Int. S CAm g
11945 0000-0100 ROU Radio Romania Int. RO ENA g
11945 0100-0200 ROU Radio Romania Int. RO ENA g
11950 0000-0200 CUB Radio Habana Cuba S Car
11950 0000-0600 CUB Radio Habana Cuba E NAm b
11950 2200-2300 CUB Radio Habana Cuba S Car
11950 2300-2400 CUB Radio Habana Cuba S Car
11950 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
11950 1920-2020 IRN IRIB Voice of I.R.Iran E SAf s
11960 0530-0600 ROU Radio Romania Int. E WEu g
11965 0930-0945 Sa AUS Reach Beyond Australia JV INS ku
11965 0930-1000 Su AUS Reach Beyond Australia IN INS ku
11965 0930-1000 Mo-Fr AUS Reach Beyond Australia MAD INS ku
11965 0945-1100 Sa AUS Reach Beyond Australia IN INS ku
11965 1000-1015 Su AUS Reach Beyond Australia BAL INS ku
11965 1000-1030 Mo-Fr AUS Reach Beyond Australia SUN INS ku
11965 1015-1030 Su AUS Reach Beyond Australia MAD INS ku
11965 1030-1100 Su AUS Reach Beyond Australia E INS ku
11965 1100-1115 Sa AUS Reach Beyond Australia MGO SLM ku
11965 1100-1115 Su AUS Reach Beyond Australia ML INS ku
11965 1130-1145 AUS Reach Beyond Australia ROH INS ku
11965 1600-1700 CHN China Radio Int. E Eu ka
11965 2000-2100 MDG MWV African Pathways R. E CAf m
11965 1300-1400 TUR Voice of Turkey R EEu e
11970 2300-2400 ROU Radio Romania Int. S SAm g
11975 2130-2230 CHN China Radio Int. F NAf /MLI
11975 1700-1800 ROU Radio Romania Int. RO WEu g
11975 1800-1900 ROU Radio Romania Int. RO WEu g
11975 1900-2000 ROU Radio Romania Int. RO WEu g
11975 2000-2030 ROU Radio Romania Int. F WEu g
11975 2030-2100 ROU Radio Romania Int. E WEu g
12005 0900-1000 CHN China Radio Int. M Oc k
12005 1000-1100 CHN China Radio Int. CA Oc k
12015 1700-1800 CHN China Radio Int. E Eu b
12015 1400-1600 KRE Voice of Korea R Eu u
12015 1600-1700 KRE Voice of Korea D Eu u
12015 1700-1800 KRE Voice of Korea R Eu u
12015 1800-1900 KRE Voice of Korea D Eu u
12015 1900-2000 KRE Voice of Korea D Eu u
12015 2000-2050 KRE Voice of Korea KCBS K Eu u
12035 0700-1300 Tu,Th USA Voice of America E EEu /D-L
12050 0000-2400 HOL SunDance Radio NL Eu n
12050 1355-0600 irr USA WEWN EWTN Catholic R. S LAm b
12060 1900-2100 J NHK Radio Japan J CAf y
12060 2100-2120 J NHK Radio Japan F CAf y
12060 0600-1400 Tu,Fr USA Voice of America E Af /BOT
12095 0400-0500 Mo-Sa G BBC E EAf /MDG
12095 0400-0500 Su G BBC E EAf /MDG
12095 0629-0700 G BBC HA WAf /ASC
12095 0700-0729 G BBC F WAf /ASC
12095 1400-1500 Mo-Fr G BBC SO EAf /OMA-a
12095 1500-1530 Mo-Fr G BBC E EAf /OMA-a
12095 1530-1700 Mo-Fr G BBC E EAf /OMA-a
12095 1530-1730 Su G BBC E EAf /OMA-a
13575 1200-1300 CHN China Radio Int. R EEu u
13580 1000-1100 CHN China Radio Int. E Oc k
13580 0500-0530 ROU Radio Romania Int. F Af t
13580 1557-1627 Su SWZ Trans World Radio KNK EAf
13610 0700-0800 KOR KBS World Radio K Eu /G-w
13630 1930-2000 CHN China Radio Int. P EAf /MLI
13630 2000-2100 CHN China Radio Int. E EAf /MLI
13630 2100-2130 CHN China Radio Int. E EAf /MLI
13630 2130-2230 CHN China Radio Int. F EAf /MLI
13635 0600-1300 TUR Voice of Turkey TU Eu e
13640 1900-0300 ALG Ifrikya FM A CAf b
13640 0100-0200 CHN China Radio Int. E Eu ka
13640 1500-1600 CHN China Radio Int. E Eu ka
13645 1700-1800 CHN China Radio Int. SWA EAf /MLI
13650 2300-2400 CHN China Radio Int. P SAm /CUB
13655 0830-0900 TUR Voice of Turkey I SEu e
13660 1830-2030 CHN China Radio Int. F WAf ka
13670 1300-1400 CHN China Radio Int. E Eu ka
13670 1700-1800 CHN China Radio Int. EO Eu b
13670 2000-2100 CHN China Radio Int. M Eu b
13670 2100-2200 CHN China Radio Int. HR SEu b
13670 1800-1900 MDG MWV African Pathways R. E CAf m
13685 1300-1400 CHN China Radio Int. F EAf /MLI
13685 1430-1500 CHN China Radio Int. E EAf /MLI
13685 1500-1600 CHN China Radio Int. E EAf /MLI
13685 1830-1930 CHN China Radio Int. A NAf /MLI
13690 2000-2100 CHN China Radio Int. M Eu s
13690 2100-2300 CHN China Radio Int. S SEu s
13690 0600-0658 Mo-Fr G BBC E Oc /NZL-r
13690 0459-0658 NZL RNZ Pacific E Oc r
13690 1600-1700 Su ROU Radio Romania DIGITAL HB WEu s
13690 1600-1700 Mo-Sa ROU Radio Romania DIGITAL RO WEu s
13695 0500-0600 F Radio France Int. F CAf i
13695 0600-0700 F Radio France Int. F WAf i
13695 0700-0800 F Radio France Int. F WAf i
13700 1800-1900 CHN China Radio Int. AM SEu u
13710 1400-1500 CHN China Radio Int. E Eu ka
13710 1830-1900 CHN China Radio Int. BU SEE k
13720 2000-2030 F Radio France Int. HA CAf i
13725 1630-1730 TUR Voice of Turkey S SEu e
13730 0100-0130 CHN CRI DIGITAL M Oc k
13730 0200-0230 CHN CRI DIGITAL M Oc k
13730 0400-0430 CHN CRI DIGITAL M Oc k
13730 0530-0600 CHN CRI DIGITAL M Oc k
13730 0700-0730 CHN CRI DIGITAL M Oc k
13730 0830-0900 CHN CRI DIGITAL M Oc k
13730 0900-1000 CHN China Radio Int. M Oc k
13730 1800-1900 Tu,Th D Music 4 Joy DIGITAL EAf n
13740 0100-0300 CHN China Radio Int. S SAm ka
13740 2300-0100 CHN China Radio Int. S SAm ka
13740 0600-0630 F Radio France Int. HA WAf i
13740 2200-2300 irr F TDF DIGITAL F EAf i
13740 1630-1700 Mo-Fr G BBC KNK EAf /UAE
13750 2030-2230 CHN China Radio Int. F SEu u
13750 1700-1800 ROU Radio Romania DIGITAL E WEu t
13755 1500-1600 CHN China Radio Int. M Eu ka
13760 1600-1700 CHN China Radio Int. E Eu ka
13760 1700-1800 CHN China Radio Int. E Eu ka
13760 1800-1900 CHN China Radio Int. E Eu ka
13760 0300-0400 KRE Voice of Korea S LAm u
13760 0400-0500 KRE Voice of Korea E LAm u
13760 0500-0600 KRE Voice of Korea S LAm u
13760 0600-0700 KRE Voice of Korea F LAm u
13760 0700-0900 KRE Voice of Korea R Eu u
13760.4 1300-1400 KRE Voice of Korea E Eu u
13760.4 1400-1500 KRE Voice of Korea F Eu u
13760.4 1500-1600 KRE Voice of Korea E Eu u
13760.4 1600-1700 KRE Voice of Korea F Eu u
13760.4 1700-1750 KRE Voice of Korea KCBS K Eu u
13760.4 1800-1900 KRE Voice of Korea E Eu u
13760.4 1900-2000 KRE Voice of Korea S Eu u
13760.4 2000-2100 KRE Voice of Korea F Eu u
13760.4 2100-2200 KRE Voice of Korea E Eu u
13760.4 2200-2300 KRE Voice of Korea S Eu u
13760.4 2300-2350 KRE Voice of Korea KCBS K Eu u
13760 0800-1100 Tu,Th USA Voice of America E EEu /D-L
13790 1600-1800 CHN China Radio Int. A NAf ka
13790 0400-0430 Mo-Fr G BBC SO EAf /MDG
13790 1800-1830 G BBC F CAf /MDG
13800 0900-1000 CHN China Radio Int. E Oc k
13800 1802-1832 Sa SWZ Trans World Radio JU EAf
13800 1802-1902 Mo-Fr SWZ Trans World Radio A EAf
13810 1200-1400 CHN China Radio Int. M EAf ka
13810 1800-2000 CHN China Radio Int. D WEu ka
13810 0330-0400 CHN CRI DIGITAL M Oc k
13830 1530-1600 CVA Radio Vaticana AH EAf
13830 1600-1615 Sa CVA Radio Vaticana SWA EAf /MDG
13830 1600-1630 Su-Mo CVA Radio Vaticana SWA EAf /MDG
13830 1615-1630 Sa CVA Radio Vaticana SO EAf /MDG
13830 1630-1700 CVA Radio Vaticana E EAf /MDG
13830 1700-1730 CVA Radio Vaticana F CAf
13830 1730-1800 CVA Radio Vaticana TIG EAf
13830 1840-1900 Su CVA Radio Vaticana Ros Af
13840 1959-2058 Su-Fr NZL RNZ Pacific DIGITAL E Oc r
13845 1200-2400 USA WWCR 3 Nashville, TN E NAm n
13845 1300-1330 Su USA WWCR 3 Nashville, TN L NAm n
13845 1600-1700 Sa USA WWCR 3 Nashville, TN S NAm n
13855 1900-0100 ALG Ifrikya FM A WAf o
13855 2145-2155 ALG Ifrikya FM E WAf o
13860 1500-1600 CHN China Radio Int. R EEu s
15105 1442-1457 Th-Su SWZ Trans World Radio AFA EAf
15105 1534-1619 Mo-Fr SWZ Trans World Radio TIG EAf
15105 1549-1619 SaSu SWZ Trans World Radio KUN EAf
15120 0450-0550 IRN IRIB Voice of I.R.Iran SWA EAf s
15120 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15125 1600-1700 CHN China Radio Int. A EAf /MLI
15125 1700-1800 CHN China Radio Int. SWA EAf /MLI
15130 0630-0700 ROU Radio Romania Int. A NAf g
15130 1100-1200 ROU Radio Romania Int. E WEu g
15130 1530-1600 ROU Radio Romania Int. A NAf g
15130 2030-2100 ROU Radio Romania Int. E ENA t
15140 0700-1900 ALG Ifrikya FM A WAf o
15140 0000-0100 CUB Radio Habana Cuba E NAm b
15140 0100-0200 CUB Radio Habana Cuba CR NAm b
15140 0200-0300 CUB Radio Habana Cuba P NAm b
15140 0300-0400 CUB Radio Habana Cuba E NAm b
15140 0400-0500 CUB Radio Habana Cuba P NAm b
15140 0500-0600 CUB Radio Habana Cuba E NAm b
15140 1300-1500 CUB Radio Habana Cuba S NAm b
15140 1500-1530 Su CUB Radio Habana Cuba EO NAm b
15140 1500-1800 CUB Radio Habana Cuba S NAm b
15140 1800-1830 CUB Radio Habana Cuba F NAm b
15140 1830-1900 CUB Radio Habana Cuba CR NAm b
15140 1900-2000 CUB Radio Habana Cuba E NAm b
15145 0400-0500 irr F TDF DIGITAL F Af i
15145 1700-1730 Fr-Su TWN Radio Taiwan Int. F Eu s
15150 0900-1000 Su ROU Radio Romania Int. RO WEu g
15150 1000-1100 ROU Radio Romania Int. F WEu g
15150 1200-1700 Su-Fr USA WMLK Bethel, PA E Eu
15170 1300-1500 ROU Radio Romania Int. RO WEu g
15170 2300-2400 ROU Radio Romania Int. S SAm t
15180 1100-1200 CHN China Radio Int. BU Eu ka
15180 1200-1300 CHN China Radio Int. SR Eu ka
15180 0300-0400 KRE Voice of Korea S LAm u
15180 0400-0500 KRE Voice of Korea E LAm u
15180 0500-0600 KRE Voice of Korea S LAm u
15180 0600-0700 KRE Voice of Korea F LAm u
15180 1000-1100 KRE Voice of Korea E LAm u
15180 1100-1200 KRE Voice of Korea F LAm u
15180 1200-1250 KRE Voice of Korea KCBS K LAm u
15180 1700-1800 ROU Radio Romania Int. E WEu t
15200 0800-0900 Su ROU Radio Romania Int. RO EGY g
15200 1700-1800 ROU Radio Romania Int. RO WEu g
15220 1000-1100 CHN China Radio Int. HU Eu ka
15220 1100-1200 CHN China Radio Int. CZ WEu ka
15230 1100-1300 CUB Radio Habana Cuba S WNA q
15230 1300-1500 CUB Radio Habana Cuba S WNA q
15230 1500-1530 Su CUB Radio Habana Cuba EO WNA q
15230 1500-1800 CUB Radio Habana Cuba S WNA q
15230 2100-2200 CUB Radio Habana Cuba P SAm q
15230 2200-2300 CUB Radio Habana Cuba S SAm q
15230 2300-2400 CUB Radio Habana Cuba S SAm q
15245 1500-1600 CHN China Radio Int. E Eu ka
15245.2 0700-0900 KRE Voice of Korea R Eu u
15245.2 1300-1400 KRE Voice of Korea E Eu u
15245.2 1400-1500 KRE Voice of Korea F Eu u
15245.2 1500-1600 KRE Voice of Korea E Eu u
15245.2 1600-1700 KRE Voice of Korea F Eu u
15245.2 1700-1750 KRE Voice of Korea KCBS K Eu u
15245.2 1800-1900 KRE Voice of Korea E Eu u
15245.2 1900-2000 KRE Voice of Korea S Eu u
15245.2 2000-2100 KRE Voice of Korea F Eu u
15245.2 2100-2200 KRE Voice of Korea E Eu u
15245.2 2200-2300 KRE Voice of Korea S Eu u
15245.2 2300-2350 KRE Voice of Korea KCBS K Eu u
15250 0900-1000 Su ROU Radio Romania Int. RO WEu g
15250 1000-1100 ROU Radio Romania Int. F WEu g
15260 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15265 1800-1900 KOR KBS World Radio R EEu /G-w
15280 1530-1600 ROU Radio Romania Int. A NAf g
15300 1430-1500 CAN Bible Voice NU EAf /D-n
15300 0400-0500 F Radio France Int. F EAf i
15300 0500-0600 F Radio France Int. F CAf i
15300 0600-0700 F Radio France Int. F CAf i
15300 0700-0800 F Radio France Int. F WAf i
15300 0800-0900 F Radio France Int. F WAf i
15300 0900-1000 F Radio France Int. F WAf i
15300 1800-1900 F Radio France Int. F WAf i
15300 1900-2000 F Radio France Int. F WAf i
15310 1600-1630 Su-Tu CAN Bible Voice OO EAf /D-n
15310 1600-1630 Th-Fr CAN Bible Voice TIG EAf /D-n
15310 1630-1700 SaSu CAN Bible Voice SO EAf /D-n
15310 1700-1730 Tu-Th CAN Bible Voice AH EAf /D-n
15310 1700-1730 SaSu CAN Bible Voice TIG EAf /D-n
15310 1730-1800 Sa CAN Bible Voice KUN EAf /D-n
15310 1400-1600 Sa G BBC E EAf /OMA-a
15320 1100-1200 ROU Radio Romania Int. E WEu g
15320 1200-1230 ROU Radio Romania Int. A NAf g
15320 0500-0600 TUR Voice of Turkey SWA EAf e
15320 1300-1600 TUR Voice of Turkey TU Eu e
15325 0700-0730 F Radio France Int. HA WAf i
15330 0730-0800 F Radio France Int. FU WAf i
15335 0800-0900 CHN China Radio Int. R EEu ka
15335 0900-1000 CHN China Radio Int. R EEu ka
15335 1200-1300 CHN China Radio Int. R EEu s
15340 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15340 1300-1500 ROU Radio Romania Int. RO WEu g
15350 1130-1230 TUR Voice of Turkey D Eu e
15365 0600-1300 TUR Voice of Turkey TU Eu e
15390 1400-2200 SaSu E Radio Exterior España S Af n
15390 1500-1800 Mo-Fr E Radio Exterior España S Af n
15390 1800-2000 Mo-Fr E Radio Exterior España S Af n
15390 2000-2030 Tu-Th E Radio Exterior España S Af n
15390 2000-2030 Mo E Radio Exterior España SEF Af n
15390 2000-2100 Fr E Radio Exterior España A Af n
15390 2030-2100 Mo E Radio Exterior España M Af n
15390 2030-2100 Tu-Th E Radio Exterior España S Af n
15390 2100-2200 Mo-Fr E Radio Exterior España S Af n
15390 2200-2230 Sa E Radio Exterior España R Af n
15390 2200-2230 157 E Radio Exterior España S Af n
15390 2200-2300 We E Radio Exterior España E Af n
15390 2200-2300 Tu E Radio Exterior España F Af n
15390 2200-2300 Th E Radio Exterior España P Af n
15390 2230-2300 Fr-Mo E Radio Exterior España S Af n
15400 1230-1245 Sa AUS Reach Beyond Australia MAR NIn ku
15400 1230-1245 1235 AUS Reach Beyond Australia OR NIn ku
15400 1230-1245 Th AUS Reach Beyond Australia TEL NIn ku
15400 1230-1300 Su AUS Reach Beyond Australia E NIn ku
15400 1245-1315 Mo-Sa AUS Reach Beyond Australia HI NIn ku
15400 1300-1330 Su AUS Reach Beyond Australia HI NIn ku
15400 1315-1330 Th-Fr AUS Reach Beyond Australia HI NIn ku
15400 1315-1330 We AUS Reach Beyond Australia HIM NIn ku
15400 1315-1330 Tu,Sa AUS Reach Beyond Australia PJ NIn ku
15400 1315-1330 Mo AUS Reach Beyond Australia UR NIn ku
15400 1330-1345 Mo-Fr AUS Reach Beyond Australia NE NIn ku
15400 1330-1400 SaSu AUS Reach Beyond Australia E NIn ku
15400 1345-1400 Mo AUS Reach Beyond Australia PJ NIn ku
15400 1345-1400 We-Th AUS Reach Beyond Australia ROH NIn ku
15400 1345-1400 Tu,Fr AUS Reach Beyond Australia TB NIn ku
15400 0500-0600 Sa G BBC KNK EAf /MDG
15400 0530-0600 Su G BBC KNK EAf /MDG
15400 1800-1900 Mo-Fr G BBC E WAf /ASC
15400 1930-2000 Sa-Th G BBC HA WAf w
15400 1930-2030 Fr G BBC HA WAf w
15410 1400-1500 CHN China Radio Int. M Eu ka
15410 1215-1315 IND AIR Akashvani Ext.Sce SWA EAf b
15410 1240-1255 irr IND AIR Akashvani Ext.Sce E EAf b
15410 0630-0700 ROU Radio Romania Int. A NAf g
15410 0800-0900 Su ROU Radio Romania Int. RO EGY g
15420 1700-1730 135 CLA V.o.Oromo Liberation OO EAf /D-n
15420 0700-0730 F Radio France Int. MAN WAf i
15420 1400-1500 Mo-Fr G BBC SO EAf /MDG
15420 2030-2100 ROU Radio Romania Int. E ENA t
15420 1800-1900 TCD Radio Ndarason Int. KNU WAf /G-w
15425 1500-1530 12356 I IRRS Oromia Nat.Media OO EAf /ROU-g
15430 0450-0550 IRN IRIB Voice of I.R.Iran SWA EAf s
15430 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15430 1020-1150 IRN IRIB Voice of I.R.Iran HA WAf s
15440 1730-1800 USA Adventist World Radio OO EAf /D-n
15440 1800-1830 USA Adventist World Radio TIG EAf /D-n
15440 1830-1900 USA Adventist World Radio AH EAf /D-n
15440 1900-1930 USA Adventist World Radio HA CAf /D-n
15440 1930-2000 USA Adventist World Radio IG WAf /D-n
15440 2000-2030 USA Adventist World Radio YO WAf /D-n
15445 0400-0500 CHN China Radio Int. R EEu ka
15445 0500-0600 CHN China Radio Int. R EEu ka
15445 0800-0900 CHN CRI DIGITAL M Oc k
15445 1500-1530 12356 I IRRS Oromia Nat.Media OO EAf /ROU-g
15460 1100-1200 SaSu AUS Reach Beyond Australia J J ku
15460 1130-1200 Mo-Fr AUS Reach Beyond Australia E J ku
15460 1300-1330 AUS Reach Beyond Australia DZ BTN ku
15460 0200-0300 CHN CRI DIGITAL M Oc k
15460 0900-1000 irr F TDF DIGITAL F WAf i
15460 1400-1500 TUR Voice of Turkey A NAf e
15490 0500-0600 G BBC E CAf w
15490 0700-0730 G BBC F CAf /ASC
15490 1200-1230 G BBC F NAf w
15490 1800-1830 G BBC F WAf /ASC
15500 0000-0200 Tu-Sa E Radio Exterior España S NAm n
15500 1400-2200 SaSu E Radio Exterior España S NAm n
15500 1800-2000 Mo-Fr E Radio Exterior España S NAm n
15500 2000-2030 Tu-Th E Radio Exterior España S NAm n
15500 2000-2030 Mo E Radio Exterior España SEF NAm n
15500 2000-2100 Fr E Radio Exterior España A NAm n
15500 2030-2100 Mo E Radio Exterior España M NAm n
15500 2030-2100 Tu-Th E Radio Exterior España S NAm n
15500 2100-2200 Mo-Fr E Radio Exterior España S NAm n
15500 2200-2230 Sa E Radio Exterior España R NAm n
15500 2200-2230 157 E Radio Exterior España S NAm n
15500 2200-2300 We E Radio Exterior España E NAm n
15500 2200-2300 Tu E Radio Exterior España F NAm n
15500 2200-2300 Th E Radio Exterior España P NAm n
15500 2230-2300 Fr-Mo E Radio Exterior España S NAm n
15500 2300-2400 Mo-Fr E Radio Exterior España S NAm n
15505 0900-0930 irr F TDF DIGITAL F Af i
15505 0600-0700 TCD Radio Ndarason Int. KNU WAf /G-w
15510 0500-0530 ROU Radio Romania Int. F Af t
15550 1020-1150 IRN IRIB Voice of I.R.Iran HA WAf s
15555 1358-2200 USA WJHR Milton, FL (USB) E NAm mi
15560 1020-1150 IRN IRIB Voice of I.R.Iran HA WAf s
15565 0700-1000 irr CVA Radio Vaticana P SAf
15565 1530-1600 CVA Radio Vaticana AH EAf
15565 1600-1615 Sa CVA Radio Vaticana SWA EAf
15565 1600-1630 Su-Mo CVA Radio Vaticana SWA EAf
15565 1615-1630 Sa CVA Radio Vaticana SO EAf
15565 1630-1700 CVA Radio Vaticana E SAf
15565 1700-1730 CVA Radio Vaticana F CAf
15565 1730-1800 CVA Radio Vaticana TIG EAf
15565 1800-1830 CVA Radio Vaticana P SAf
15575 0200-0300 KOR KBS World Radio S NAm k
15575 1300-1400 KOR KBS World Radio E NAm k
15575 1400-1500 KOR KBS World Radio K NAm k
15590 1200-1300 CHN China Radio Int. E Eu u
15590 1300-1400 CHN China Radio Int. E Eu u
15590 1400-1500 CHN China Radio Int. E Eu u
15590 0300-0400 CHN CRI DIGITAL M Oc k
15595 0830-0950 Su CVA Radio Vaticana LTO EEu
15595 0830-0950 1.Su CVA Radio Vaticana GZ EAf
15610 0600-1400 Tu,Fr USA Voice of America E Af /BOT
15640 0400-0500 CHN CRI DIGITAL M Oc k
15665 0400-0500 CHN China Radio Int. R EEu u
15665 0500-0600 CHN China Radio Int. R EEu u
15665 0800-0900 CHN China Radio Int. R EEu u
15665 0900-1000 CHN China Radio Int. R EEu u
15670 0100-0200 CHN CRI DIGITAL M Oc k
15670 0600-0700 CHN CRI DIGITAL M Oc k
15670 0700-0730 CHN CRI DIGITAL M Oc k
15690 0700-1100 Tu,Th USA Voice of America E EEu /D-L
15710 1600-1630 Sa CLA Hope of Israel E EAf /F-i
15720 0730-0800 CHN CRI DIGITAL M Oc k
15720 1959-2058 NZL RNZ Pacific E Oc r
15730 0500-0600 CHN CRI DIGITAL M Oc k
15770 2230-2300 CZE Radio Prague E ENA /USA-o
15770 2300-2330 KOR KBS World Radio E ENA /USA-o
15770 0000-0030 SVK Radio Slovakia Int. SK ENA /USA-o
15770 0030-0100 SVK Radio Slovakia Int. E ENA /USA-o
15770 0630-0700 SVK Radio Slovakia Int. S ENA /USA-o
15770 2200-2230 TWN Radio Taiwan Int. S ENA /USA-o
15770 0400-0500 Mo-Fr USA Radio Liberty R ENA o
15770 0000-2400 USA WRMI Radio Miami Int. E ENA o
15785 0000-2400 D funklust DIGITAL D CEu e
17485 0500-0700 CHN China Radio Int. A NAf ka
17490 0300-0400 CHN CRI DIGITAL M Oc k
17490 0400-0500 CHN CRI DIGITAL M Oc k
17490 0700-0900 CHN China Radio Int. E Eu ka
17490 0900-1000 CHN China Radio Int. E Eu ka
17490 1000-1100 CHN China Radio Int. E Eu ka
17490 1100-1300 CHN China Radio Int. E Eu ka
17510 0500-0600 CHN China Radio Int. E NAf ka
17510 0600-0700 CHN China Radio Int. E NAf ka
17510 1500-1800 irr CVA Radio Vaticana P SAf
17520 0600-0700 CHN China Radio Int. I SEu ka
17520 0200-0300 ROU Radio Romania Int. S SAm t
17520 2100-2200 ROU Radio Romania Int. S SAm t
17520 2300-2400 ROU Radio Romania Int. S SAm t
17525 0700-1000 irr CVA Radio Vaticana F WAf
17525 1500-1800 irr CVA Radio Vaticana F WAf
17525 1730-2230 Su-Fr USA WMLK Bethel, PA E Eu
17540 0700-1000 irr CVA Radio Vaticana E CAf
17540 1500-1800 irr CVA Radio Vaticana E CAf
17560 1200-1400 CHN China Radio Int. F SEu ka
17570 0900-1000 CHN China Radio Int. E Eu u
17570 1000-1100 CHN China Radio Int. HU Eu ka
17570 1100-1200 CHN China Radio Int. CZ WEu ka
17580 2100-2200 ROU Radio Romania Int. S SAm t
17600 0700-0100 ALG Ifrikya FM A CAf b
17600 1115-1130 ALG Ifrikya FM SWA CAf b
17605 0200-0300 CHN CRI DIGITAL M Oc k
17615 0500-0700 CHN China Radio Int. D WEu u
17615 1000-1030 TUR Voice of Turkey TT EEu e
17620 0900-1000 CHN China Radio Int. RO Eu ka
17620 0700-0730 F Radio France Int. HA WAf i
17620 0800-0830 F Radio France Int. MAN WAf i
17620 0830-0900 F Radio France Int. FU WAf i
17620 1200-1230 F Radio France Int. MAN WAf i
17620 1600-1700 F Radio France Int. HA WAf i
17620 1700-1800 F Radio France Int. F WAf i
17620 1800-1900 F Radio France Int. F WAf i
17620 1900-2000 F Radio France Int. F WAf i
17620 1230-1330 TUR Voice of Turkey E CEu e
17630 1430-1500 CHN China Radio Int. E EAf /MLI
17630 1500-1600 CHN China Radio Int. E EAf /MLI
17630 0900-1000 Su ROU Radio Romania Int. RO NAf t
17630 1000-1100 ROU Radio Romania Int. F NAf t
17640 0100-0200 CHN China Radio Int. E Eu ka
17640 0700-0800 CHN CRI DIGITAL M Oc k
17640 1200-1230 G BBC F WAf /ASC
17640 1400-1600 Sa G BBC E WAf /ASC
17640 1530-1730 Su G BBC E WAf /ASC
17640 1730-1750 Mo-Fr G BBC AH EAf w
17640 1750-1810 Mo-Fr G BBC OO EAf w
17640 1810-1830 Mo-Fr G BBC TIG EAf w
17640 1830-1850 Mo-Fr G BBC AH EAf w
17640 1850-1910 Mo-Fr G BBC OO EAf w
17640 1910-1930 Mo-Fr G BBC TIG EAf w
17650 2230-2300 AUS Reach Beyond Australia J J ku
17650 0600-0700 CHN China Radio Int. M Eu ka
17650 0700-0800 CHN China Radio Int. M Eu ka
17650 0800-0900 CHN China Radio Int. M Eu ka
17650 0900-1000 CHN China Radio Int. E Eu ka
17650 1000-1100 CHN China Radio Int. M Eu ka
17650 1100-1200 CHN China Radio Int. M Eu ka
17650 1200-1300 CHN China Radio Int. M Eu ka
17650 1300-1400 CHN China Radio Int. F SEu ka
17660 0530-0600 F Radio France Int. SWA EAf i
17660 0800-0900 F Radio France Int. F WAf i
17660 0900-1000 F Radio France Int. F WAf i
17660 1300-1330 F Radio France Int. FU WAf i
17670 0700-0900 CHN China Radio Int. E NAf ka
17670 1730-1800 S IBRA Radio Sama TGR EAf /G-w
17670 1800-1830 S IBRA Radio Sama FUR EAf /G-w
17670 1830-1900 S IBRA Radio Sama A EAf /G-w
17675 2210-2240 Mo-Th AUS ABC Wantok TP Oc /NZL-r
17675 0125-0135 Th NZL RNZ Pacific F Oc r
17675 0325-0335 Th NZL RNZ Pacific F Oc r
17675 2059-0458 NZL RNZ Pacific E Oc r
17675 2110-2120 Mo,Th NZL RNZ Pacific SLM Oc r
17675 2240-2250 We NZL RNZ Pacific F Oc r
17680 0600-0700 CHN China Radio Int. S SEu ka
17680 0700-0800 CHN China Radio Int. S SEu ka
17690 0600-1400 Tu,Fr USA Voice of America E Af /BOT
17700 0000-0900 CHN CRI DIGITAL M Oc k
17715 0000-0200 Tu-Sa E Radio Exterior España S SAm n
17715 1400-2200 SaSu E Radio Exterior España S SAm n
17715 1800-2000 Mo-Fr E Radio Exterior España S SAm n
17715 2000-2030 Tu-Th E Radio Exterior España S SAm n
17715 2000-2030 Mo E Radio Exterior España SEF SAm n
17715 2000-2100 Fr E Radio Exterior España A SAm n
17715 2030-2100 Mo E Radio Exterior España M SAm n
17715 2030-2100 Tu-Th E Radio Exterior España S SAm n
17715 2100-2200 Mo-Fr E Radio Exterior España S SAm n
17715 2200-2230 Sa E Radio Exterior España R SAm n
17715 2200-2230 157 E Radio Exterior España S SAm n
17715 2200-2300 We E Radio Exterior España E SAm n
17715 2200-2300 Tu E Radio Exterior España F SAm n
17715 2200-2300 Th E Radio Exterior España P SAm n
17715 2230-2300 Fr-Mo E Radio Exterior España S SAm n
17715 2300-2400 Mo-Fr E Radio Exterior España S SAm n
17720 0500-0700 CHN China Radio Int. D WEu ka
17720 0200-0300 ROU Radio Romania Int. S SAm t
17730 1700-1730 F Radio France Int. MAN WAf i
17730 1730-1800 F Radio France Int. FU WAf i
17735 1300-1400 CHN China Radio Int. M Eu ka
17735 1400-1500 CHN China Radio Int. M Eu ka
17735 1500-1600 CHN China Radio Int. M Eu ka
17740 1000-1100 TUR Voice of Turkey F SEu e
17745 0400-0430 Mo-Fr G BBC SO EAf /UAE
17745 1630-1700 Mo-Fr G BBC KNK EAf /MDG
17750 0500-0600 Sa G BBC KNK EAf /CVA
17750 0529-0600 Su G BBC KNK EAf /CVA
17760 0500-0600 CHN CRI DIGITAL M Oc k
17760 0600-0700 CHN CRI DIGITAL M Oc k
17765 1600-1800 CHN China Radio Int. F SEu ka
17780 1700-1730 Mo-Fr G BBC E WAf /ASC
17780 1730-1800 Mo-Fr G BBC E WAf /ASC
17780 1000-1100 ROU Radio Romania Int. F NAf t
17780 1200-1230 ROU Radio Romania Int. A NAf t
17790 0830-0950 1.Su CVA Radio Vaticana GZ EAf
17790 0000-0030 CZE Radio Prague S LAm /USA-o
17790 2230-2300 CZE Radio Prague E LAm /USA-o
17790 2300-2330 CZE Radio Prague F LAm /USA-o
17790 2330-2400 CZE Radio Prague E LAm /USA-o
17790 0500-0650 J NHK Radio Japan J CAm y
17790 0030-0100 SVK Radio Slovakia Int. S LAm /USA-o
17790 0130-0200 SVK Radio Slovakia Int. E LAm /USA-o
17790 0100-0130 TWN Radio Taiwan Int. S LAm /USA-o
17790 2200-2230 TWN Radio Taiwan Int. S LAm /USA-o
17790 1500-2130 USA PAB Radio Africa E SAm o
17790 2130-2200 USA WRMI Radio Miami Int. E ENA o
17810 0700-0730 Su-Th G BBC A EAf /UAE
17815 1200-1300 F Radio France Int. F WAf i
17825 0500-0600 Su G BBC E EAf /OMA-a
17825 0500-0600 Mo-Sa G BBC E EAf /OMA-a
17830 1900-2000 Su TWN Radio Taiwan Int. F WAf /F-i
17830 1700-1730 Mo-Fr G BBC E CAf /ASC
17830 1730-1900 Mo-Fr G BBC E CAf /ASC
17840 0200-0300 CHN China Radio Int. M SAm b
17850 0600-0700 F Radio France Int. F CAf i
17850 0700-0800 F Radio France Int. F CAf i
17850 0800-0900 F Radio France Int. F CAf i
17850 0900-1000 F Radio France Int. F CAf i
17850 1200-1300 F Radio France Int. F WAf i
17850 1800-1900 F Radio France Int. F CAf i
17850 1900-2000 F Radio France Int. F CAf i
17860 1100-1200 ROU Radio Romania Int. E EAf t
17865 0600-0700 CHN China Radio Int. F SEu ka
17865 0700-0800 CHN China Radio Int. F SEu ka
17870 0100-0200 CHN CRI DIGITAL M Oc k
17880 0000-0100 CHN China Radio Int. P SAm b
17880 1300-1400 CHN China Radio Int. F EAf /MLI
17880 1600-1700 CHN China Radio Int. A NAf /MLI
17880 2200-2300 CHN China Radio Int. S SAm b
17880 2300-2400 CHN China Radio Int. P SAm b
17880 0700-1300 Tu,Th USA Voice of America E EEu /D-L
18975 0700-0730 CHN CRI DIGITAL M Oc k
18985 0200-0300 CHN CRI DIGITAL M Oc k
18985 0500-0600 CHN CRI DIGITAL M Oc k
19005 0330-0400 CHN CRI DIGITAL M Oc k
19015 0130-0200 CHN CRI DIGITAL M Oc k
19015 0300-0330 CHN CRI DIGITAL M Oc k
19015 0400-0500 CHN CRI DIGITAL M Oc k
19015 0600-0700 CHN CRI DIGITAL M Oc k
19015 0800-0830 CHN CRI DIGITAL M Oc k
21470 1400-1430 Mo-Fr G BBC HA WAf /UAE
21470 1400-1600 Sa G BBC E CAf /UAE
21470 1530-1730 Su G BBC E CAf /CVA
21470 0900-1000 Su ROU Radio Romania Int. RO NAf t
21480 2030-2100 ROU Radio Romania Int. E ENA t
21500 0200-0400 J NHK Radio Japan J SAm y
21500 0500-0520 J NHK Radio Japan F WAf y
21500 0700-0900 J NHK Radio Japan J WAf y
21510 1100-1200 ROU Radio Romania Int. E EAf t
21520 1200-1230 G BBC F CAf /ASC
21550 1200-1300 F Radio France Int. F CAf i
21580 0700-0800 F Radio France Int. F CAf i
21580 0800-0900 F Radio France Int. F CAf i
21580 0900-1000 F Radio France Int. F CAf i
21580 1700-1800 F Radio France Int. F CAf i
21580 1900-2000 F Radio France Int. F CAf i
21595.1 1200-1230 KEN Radio Ergo SO EAf /UAE
21630 1400-1430 Mo-Fr G BBC HA WAf /ASC
21650 0300-0330 CHN CRI DIGITAL M Oc k
21650 0630-0700 CHN CRI DIGITAL M Oc k
21655 0730-0800 CHN CRI DIGITAL M Oc k
21660 1700-1730 Su USA Follow the Bible Min. SWA EAf /ASC
21680 0900-1000 F Radio France Int. F CAf i
21680 1200-1300 F Radio France Int. F CAf i
21680 1500-1600 F Radio France Int. SWA EAf i
21680 1700-1800 F Radio France Int. F CAf i
21680 1800-1900 F Radio France Int. F CAf i
21730 1130-1145 CVA Radio Vaticana S Car
21830 0430-0500 CHN CRI DIGITAL M Oc k
21830 0500-0530 CHN CRI DIGITAL M Oc k
25800 0000-2400 DNK World Music Radio E Eu a`;

var PAGE_SIZE = 50;

// Wenn die untere Bildschirmhälfte nicht reagiert, sondern die obere,
// diesen Wert auf true setzen.
var invertY = false;

var parsedList = parseListo(listo);


// ------------------------------------------------------------
// Touch-Steuerung
// ------------------------------------------------------------

function onTouchStart(eventData) {
    var p = eventData.getTouchPosition();

    var isLowerHalf;

    if (invertY) {
        isLowerHalf = p.y < 0.5;
    } else {
        isLowerHalf = p.y >= 0.5;
    }

    if (!isLowerHalf) {
        return;
    }

    var pageIndex;

    if (p.x < 1.0 / 3.0) {
        pageIndex = 0; // erste 50 Treffer
    } else if (p.x < 2.0 / 3.0) {
        pageIndex = 1; // zweite 50 Treffer
    } else {
        pageIndex = 2; // dritte 50 Treffer
    }

    showPage(pageIndex);
}

var touchEvent = script.createEvent("TouchStartEvent");
touchEvent.bind(onTouchStart);


// ------------------------------------------------------------
// Hauptanzeige
// ------------------------------------------------------------

function showPage(pageIndex) {
    var now = new Date();

    var utcHour = now.getUTCHours();
    var utcMinute = now.getUTCMinutes();
    var nowMinutes = utcHour * 60 + utcMinute;

    var activeItems = [];

    for (var i = 0; i < parsedList.length; i++) {
        var item = parsedList[i];

        if (!isTimeActive(item.time, nowMinutes)) {
            continue;
        }

        if (!isDayActive(item, now, nowMinutes)) {
            continue;
        }

        activeItems.push(item);
    }

    var startIndex = pageIndex * PAGE_SIZE;
    var endIndex = startIndex + PAGE_SIZE;

    var pageItems = activeItems.slice(startIndex, endIndex);

    var output = makeOutputText(pageIndex, pageItems, activeItems.length, now);

    if (script.outputText) {
        script.outputText.text = output;
    } else {
        print(output);
    }
}

function makeOutputText(pageIndex, pageItems, totalCount, now) {
    var startNumber = pageIndex * PAGE_SIZE + 1;
    var endNumber = pageIndex * PAGE_SIZE + pageItems.length;

    var title;

    if (pageIndex === 0) {
        title = "Maldekstre: trafoj 1-50";
    } else if (pageIndex === 1) {
        title = "Centre: trafoj 51-100";
    } else {
        title = "Dekstre: trafoj 101-150";
    }

    var text = "";

    text += title + "; ";
    text += utcWeekdayName(now) + ", ";
    text += pad2(now.getUTCHours()) + ":" + pad2(now.getUTCMinutes()) + " UTK\n";
    text += "Trafoj ensume: " + totalCount + "\n";

    if (pageItems.length === 0) {
        text += "Neniom da trafoj chi tie.";
        return text;
    }

//    text += "Trafoj: " + startNumber + "-" + endNumber + "\n\n";

    for (var i = 0; i < pageItems.length; i++) {
        text += String(startNumber + i) + ". ";
        text += formatItem(pageItems[i]);

        if (i < pageItems.length - 1) {
            text += "\n";
        }
    }

    return text;
}

function formatItem(item) {
    // Für möglichst vollständige Ausgabe wird hier die Originalzeile angezeigt.
    return item.raw.trim();
}


// ------------------------------------------------------------
// Parsen der listo-Daten
// ------------------------------------------------------------

function parseListo(text) {
    var lines = text.split("\n");
    var result = [];

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        if (!line || line.trim().length === 0) {
            continue;
        }

        var item = parseLine(line);

        if (item) {
            result.push(item);
        }
    }

    return result;
}

function parseLine(line) {
    var m = line.match(/^(\S+)\s+(\d{4}-\d{4})\s+(.*)$/);

    if (!m) {
        return null;
    }

    var freq = m[1];
    var time = m[2];
    var rest = m[3];

    var firstToken = getFirstToken(rest);
    var days = "";

    if (isDaySpecToken(firstToken)) {
        days = firstToken;
    }

    return {
        raw: line,
        freq: freq,
        time: time,
        days: days
    };
}

function getFirstToken(s) {
    if (!s) {
        return "";
    }

    var parts = s.trim().split(/\s+/);

    if (parts.length === 0) {
        return "";
    }

    return parts[0];
}

function isDaySpecToken(token) {
    if (!token) {
        return false;
    }

    if (
        token === "irr" ||
        token === "spur" ||
        token === "Test" ||
        token === "Tests" ||
        token === "Last7"
    ) {
        return true;
    }

    // Numerische Tagesangaben, z.B. 156, 247, 12356.
    if (/^\d+$/.test(token)) {
        return true;
    }

    // Datum, z.B. 9Aug oder 10Oct.
    if (/^\d{1,2}(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/.test(token)) {
        return true;
    }

    // N-ter Wochentag im Monat, z.B. 1.Su oder 2.Su.
    if (/^\d\.(Mo|Tu|We|Th|Fr|Sa|Su)$/.test(token)) {
        return true;
    }

    // Bereich, z.B. Mo-Fr oder Su-Th.
    if (/^(Mo|Tu|We|Th|Fr|Sa|Su)-(Mo|Tu|We|Th|Fr|Sa|Su)$/.test(token)) {
        return true;
    }

    // Komma-Liste, z.B. Mo,We oder Tu,Th.
    if (/^(Mo|Tu|We|Th|Fr|Sa|Su)(,(Mo|Tu|We|Th|Fr|Sa|Su))*$/.test(token)) {
        return true;
    }

    // Zusammengezogene Tage, z.B. SaSu.
    var tmp = token;
    tmp = tmp.replace(/Mo|Tu|We|Th|Fr|Sa|Su/g, "");

    if (tmp.length === 0) {
        return true;
    }

    return false;
}


// ------------------------------------------------------------
// Zeitfilter
// ------------------------------------------------------------

function isTimeActive(timeRange, nowMinutes) {
    var parts = timeRange.split("-");

    if (parts.length !== 2) {
        return false;
    }

    var startText = parts[0];
    var endText = parts[1];

    var start = hhmmToMinutes(startText);
    var end = hhmmToMinutes(endText);

    if (start < 0 || end < 0) {
        return false;
    }

    // Spezialfall: ganztägig aktiv.
    if (startText === "0000" && endText === "2400") {
        return true;
    }

    // Normaler Zeitraum, z.B. 1300-1500.
    if (start < end) {
        return nowMinutes >= start && nowMinutes < end;
    }

    // Zeitraum über Mitternacht, z.B. 2200-0600.
    if (start > end) {
        return nowMinutes >= start || nowMinutes < end;
    }

    // start == end wird hier als nicht aktiv gewertet.
    return false;
}

function hhmmToMinutes(s) {
    if (!/^\d{4}$/.test(s)) {
        return -1;
    }

    var h = parseInt(s.substring(0, 2), 10);
    var m = parseInt(s.substring(2, 4), 10);

    if (h === 24 && m === 0) {
        return 24 * 60;
    }

    if (h < 0 || h > 23 || m < 0 || m > 59) {
        return -1;
    }

    return h * 60 + m;
}


// ------------------------------------------------------------
// Wochentagsfilter
// ------------------------------------------------------------

function isDayActive(item, now, nowMinutes) {
    var spec = item.days;

    if (!spec || spec.length === 0) {
        return true;
    }

    var parts = item.time.split("-");
    var start = hhmmToMinutes(parts[0]);
    var end = hhmmToMinutes(parts[1]);

    var checkDate = now;

    // Bei Zeiträumen über Mitternacht gilt der Tagescode normalerweise
    // für den Starttag. Wenn es jetzt nach Mitternacht im zweiten Teil
    // des Zeitfensters ist, prüfen wir den Vortag.
    if (start > end && nowMinutes < end) {
        checkDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    }

    return daySpecAllowsDate(spec, checkDate);
}

function daySpecAllowsDate(spec, date) {
    spec = spec.trim();

    if (spec === "") {
        return true;
    }

    // Diese Angaben werden nicht als einschränkender Wochentagsfilter behandelt.
    if (
        spec === "irr" ||
        spec === "spur" ||
        spec === "Test" ||
        spec === "Tests" ||
        spec === "Last7"
    ) {
        return true;
    }

    // Datum wie 9Aug, 10Oct.
    var dateMatch = spec.match(/^(\d{1,2})(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/);

    if (dateMatch) {
        var day = parseInt(dateMatch[1], 10);
        var month = monthNameToNumber(dateMatch[2]);

        return date.getUTCDate() === day && date.getUTCMonth() === month;
    }

    // N-ter Wochentag im Monat, z.B. 1.Su, 2.Su.
    var ordinalMatch = spec.match(/^(\d)\.(Mo|Tu|We|Th|Fr|Sa|Su)$/);

    if (ordinalMatch) {
        var ordinal = parseInt(ordinalMatch[1], 10);
        var wantedDay = weekdayCodeToJsDay(ordinalMatch[2]);

        if (date.getUTCDay() !== wantedDay) {
            return false;
        }

        var dayOfMonth = date.getUTCDate();
        var currentOrdinal = Math.floor((dayOfMonth - 1) / 7) + 1;

        return currentOrdinal === ordinal;
    }

    // Numerische Tagesangaben:
    // 1 = Montag, 2 = Dienstag, ..., 7 = Sonntag.
    // Beispiel: 156 = Montag, Freitag, Samstag.
    if (/^\d+$/.test(spec)) {
        var isoDay = jsDayToIsoDay(date.getUTCDay());

        return spec.indexOf(String(isoDay)) >= 0;
    }

    // Komma-Liste, z.B. Mo,We oder Tu,Th.
    if (spec.indexOf(",") >= 0) {
        var commaParts = spec.split(",");

        for (var i = 0; i < commaParts.length; i++) {
            if (daySpecAllowsDate(commaParts[i], date)) {
                return true;
            }
        }

        return false;
    }

    // Bereich, z.B. Mo-Fr oder Su-Th.
    var rangeMatch = spec.match(/^(Mo|Tu|We|Th|Fr|Sa|Su)-(Mo|Tu|We|Th|Fr|Sa|Su)$/);

    if (rangeMatch) {
        var currentIso = jsDayToIsoDay(date.getUTCDay());
        var startIso = weekdayCodeToIsoDay(rangeMatch[1]);
        var endIso = weekdayCodeToIsoDay(rangeMatch[2]);

        return isInWeekdayRange(currentIso, startIso, endIso);
    }

    // Zusammengezogene Tage, z.B. SaSu.
    var tokens = spec.match(/Mo|Tu|We|Th|Fr|Sa|Su/g);

    if (tokens && tokens.length > 0) {
        var current = jsDayToIsoDay(date.getUTCDay());

        for (var t = 0; t < tokens.length; t++) {
            if (weekdayCodeToIsoDay(tokens[t]) === current) {
                return true;
            }
        }

        return false;
    }

    // Unbekannte Spezialangaben nicht hart ausschließen.
    return true;
}

function monthNameToNumber(m) {
    var months = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
    };

    return months[m];
}

function weekdayCodeToJsDay(code) {
    var map = {
        Su: 0,
        Mo: 1,
        Tu: 2,
        We: 3,
        Th: 4,
        Fr: 5,
        Sa: 6
    };

    return map[code];
}

function weekdayCodeToIsoDay(code) {
    var map = {
        Mo: 1,
        Tu: 2,
        We: 3,
        Th: 4,
        Fr: 5,
        Sa: 6,
        Su: 7
    };

    return map[code];
}

function jsDayToIsoDay(jsDay) {
    // JavaScript:
    // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag.
    //
    // Hier:
    // 1 = Montag, ..., 7 = Sonntag.

    if (jsDay === 0) {
        return 7;
    }

    return jsDay;
}

function isInWeekdayRange(currentIso, startIso, endIso) {
    if (startIso <= endIso) {
        return currentIso >= startIso && currentIso <= endIso;
    }

    // Bereich über das Wochenende hinweg, z.B. Fr-Mo oder Su-Th.
    return currentIso >= startIso || currentIso <= endIso;
}


// ------------------------------------------------------------
// Hilfsfunktionen für Anzeige
// ------------------------------------------------------------

function utcWeekdayName(date) {
    var names = [
        "dimancho",
        "lundo",
        "mardo",
        "merkredo",
        "jhaudo",
        "vendredo",
        "sabato"
    ];

    return names[date.getUTCDay()];
}

function pad2(n) {
    if (n < 10) {
        return "0" + n;
    }

    return String(n);
}


// ------------------------------------------------------------
// Starttext
// ------------------------------------------------------------

if (script.outputText) {
    script.outputText.text =
        "Aktualaj radio-elsendoj por Afriko,\n" +
        "Ameriko, Australio, Europo kaj Oceanio.\n" +       
        "Tushi en la malsupra duono ...\n" +
        "maldekstre: trafoj 1-50\n" +
        "centre: trafoj 51-100\n" +
        "dekstre: trafoj 101-150\n" +
        "Ekstrakto el eibispace punkto de";
}
