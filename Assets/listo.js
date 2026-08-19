// Deinen vorhandenen Block hier stehen lassen:
// const listo = `...`;

// @input Component.Text outputText

// Achtung:
// In Lens Studio ist getTouchPosition() normalerweise normalisiert.
// Falls bei dir oben/unten vertauscht ist, siehe Kommentar in onTouchStart().

const listo = `3940 1900-0400 irr RUS Music Wave Radio R EEu k
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
4930 1200-1400 Tu,Fr USA Voice of America E Af /BOT
5900 1930-2000 CAN Bible Voice A ME /BUL-s
5900 0600-1700 HOL Radio Horizon NL Eu
5900 1900-1930 TWN Radio Taiwan Int. D Eu /BUL-s
5900 1800-1900 USA Brother Stair E Eu /BUL-s
5900 2005-0500 USA Brother Stair E Eu /BUL-s
5920 0000-0100 EQA HCJB Voice of Andes S CEu /D-we
5920 0100-0300 EQA HCJB Voice of Andes D CEu /D-we
5920 0300-0400 EQA HCJB Voice of Andes R CEu /D-we
5920 0400-2200 EQA HCJB Voice of Andes D CEu /D-we
5920 1800-1830 EQA HCJB Voice of Andes D-P CEu /D-we
5920 2200-2300 EQA HCJB Voice of Andes R CEu /D-we
5920 2300-2400 EQA HCJB Voice of Andes S CEu /D-we
5930 0000-2400 DNK World Music Radio E Eu br
5955 0400-1700 irr HOL SuperClan Radio NL HOL ov
5960 1830-2100 TUR Voice of Turkey TU ME e
5990 1000-1600 irr D Studio 52 Eu n
5990 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
5995 0550-0800 MLI Radio Mali BM WAf k
5995 0630-0645 MLI Radio Mali F WAf k
5995 1800-0001 MLI Radio Mali BM WAf k
5995 1850-1905 Sa MLI Radio Mali E WAf k
6005 0630-2100 SaSu FIN RealMix Radio Eu r
6005 1900-1930 TWN Radio Taiwan Int. F Eu /BUL-s
6010 1930-2030 HOL Radio Zamaneh FS IRN /BUL-s
6020 2000-2100 CHN China Radio Int. PO Eu s
6020 0500-1100 SaSu HOL Radio Casanova NL Eu w
6040 0000-0600 ALG Ifrikya FM A WAf o
6040 0400-0600 TUR Voice of Turkey TU ME e
6045 1100-1400 irr D Radio 60 Eu n
6045 0800-0900 irr XUU Various Stations Eu /D-n
6050 0555-1000 LBR ELWA Radio E WAf
6050 1700-2232 LBR ELWA Radio E WAf
6055 1030-1100 SaSu D Evang.Missionsgemeinden D Eu n
6060 1645-1900 HOL Radio Casanova NL Eu w
6070 0000-2400 D Channel 292 D,E Eu r
6085 0700-1700 E Radio Mi Amigo CEu /D-k
6090 1900-1930 CHN China Radio Int. RO EEu u
6090 1930-2000 CHN China Radio Int. RO EEu u
6095 1100-1200 2.Su D SM Radio Dessau D Eu n
6095 1200-1300 10Oct D SM Radio Dessau D Eu n
6095 0800-0900 1.Su D Welle 370 D Eu n
6100 2000-2200 CHN China Radio Int. A ME x
6115 1000-1200 SaSu D Radio SE-TA2 D Eu ge
6120 0530-0630 irr F TDF DIGITAL F Af i
6130 0000-2400 HOL Radio Europa NL WEu a
6135 0530-0600 G BBC HA WAf /ASC
6140 1500-2200 BEL Radio Onda F Eu /LUX-j
6140 1800-2000 CTI Radio Augusta Int. E WEu /LUX-j
6140 0500-1500 SUI Radio Gloria D Eu /LUX-j
6140 1330-1400 SVK Radio Slovakia Int. D Eu /LUX-j
6145 1900-2000 KOR KBS World Radio F Eu /G-w
6150 0400-0600 irr D Europa24 D Eu dt
6150 0600-1600 D Europa24 D Eu dt
6160 0700-1500 Fr-Su D Shortwave Radio Gold D,E WEu wa
6160 1500-2200 D Shortwave Radio Gold D,E WEu wa
6165 1600-1700 CHN China Radio Int. TU ME u
6165 1700-1800 CHN China Radio Int. E ME b
6165 0430-0450 J NHK Radio Japan R EEu /D-n
6165 0300-0400 TUR Voice of Turkey E ME e
6170 0000-1800 1.Sa FIN Scandinavian Weekend R. FI Eu v
6170 1800-2100 1.Sa FIN Scandinavian Weekend R. FI Eu v
6170 2100-2400 1.Fr FIN Scandinavian Weekend R. FI Eu v
6180 0600-0630 D DWD Pinneberg D Eu pi
6180 1200-1230 D DWD Pinneberg D Eu pi
6180 1600-1630 D DWD Pinneberg D Eu pi
6180 2000-2030 D DWD Pinneberg D Eu pi
7210 1800-1900 CHN China Radio Int. R EEu u
7215 0000-2400 HOL SunDance Radio NL Eu n
7220 1000-1500 HOL SunDance Radio NL Eu n
7220 2200-2300 ROU Radio Romania Int. E WEu g
7220 1500-1600 VTN Voice of Vietnam VN ME s
7220 1600-1630 VTN Voice of Vietnam E ME s
7220 1630-1700 VTN Voice of Vietnam F ME s
7220 2030-2100 VTN Voice of Vietnam E ME s
7220 2100-2130 VTN Voice of Vietnam F ME s
7225 0000-2400 HOL SunDance Radio NL Eu n
7245 1900-2000 CHN China Radio Int. R EEu a
7245 2000-2100 CHN China Radio Int. R EEu a
7250 0710-0820 Su CVA Radio Vaticana RO EEu
7250 0800-1000 KWT SuperStation 99.7 RK FM E ME k
7255 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
7260 2200-2300 CHN China Radio Int. P SEu u
7265 1700-1800 CHN China Radio Int. R EEu u
7265 1930-2030 CHN China Radio Int. EO Eu u
7265 2030-2130 CHN China Radio Int. I SEu u
7265 2200-2300 CHN China Radio Int. M ME k
7265 0000-2400 HOL Radio Europa NL Eu a
7275 1730-1830 CHN China Radio Int. M ME u
7275 1900-2000 I IRRS Milano E Eu /BUL-s
7275 1600-1700 KOR KBS World Radio K Eu k
7285 2200-2300 CHN China Radio Int. M ME u
7290 1800-1900 I IRRS Milano E Eu /BUL-s
7295 1900-2000 CHN China Radio Int. E WAf u
7295 2000-2100 CHN China Radio Int. E WAf u
7305 2000-2100 CHN China Radio Int. PO Eu u
7305 0530-0600 G BBC HA WAf /ASC
7305 0600-0630 G BBC F WAf /ASC
7310 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
7325 2100-2130 CHN China Radio Int. SR Eu x
7325 1820-1920 IRN IRIB Voice of I.R.Iran AL Eu s
7340 1800-1900 CHN China Radio Int. I SEu ka
7345 2030-2130 CHN China Radio Int. I SEu ka
7350 0000-0100 CHN China Radio Int. E Eu ka
7350 2300-2400 CHN China Radio Int. E Eu ka
7360 1730-1830 TUR Voice of Turkey F CAf e
7370 0700-1300 Tu,Th USA Voice of America E EEu /D-L
7390 2000-2030 CHN China Radio Int. SR Eu x
7390 2030-2100 CHN China Radio Int. HU Eu j
7400 1900-2100 9Aug HOL Free Radio Sce Holland E Eu xx
7400 0000-2400 HOL Radio Piepzender NL Eu zw
7415 1900-1930 CHN China Radio Int. CZ WEu u
7415 1930-2000 CHN China Radio Int. CZ WEu u
7415 2000-2100 CHN China Radio Int. E Eu ka
7415 2100-2200 CHN China Radio Int. E Eu ka
7435 1800-1900 CHN China Radio Int. I SEu j
7435 1900-1930 CHN China Radio Int. HU Eu x
7435 1930-2000 CHN China Radio Int. RO EEu x
7445 2130-2200 CHN China Radio Int. HU Eu u
9400 1800-1830 Th-Fr CAN Bible Voice FS ME /BUL-s
9400 1600-1900 USA Brother Stair E ME /BUL-s
9410 1700-1800 CHN China Radio Int. HR SEu ka
9410 1900-2000 EGY Radio Cairo D WEu a
9410 0500-0600 G BBC E WAf /ASC
9410 0600-0700 G BBC E WAf w
9410 2000-2030 Su USA Follow the Bible Min. A ME /ASC
9425 1400-1600 KRE Voice of Korea R Eu u
9425 1600-1700 KRE Voice of Korea D Eu u
9425 1700-1800 KRE Voice of Korea R Eu u
9425 1800-1900 KRE Voice of Korea D Eu u
9425 1900-2000 KRE Voice of Korea D Eu u
9425 2000-2050 KRE Voice of Korea KCBS K Eu u
9440 1900-2000 CHN China Radio Int. E ME k
9440 2000-2100 CHN China Radio Int. E ME k
9440 0600-0630 G BBC F CAf /ASC
9440 0630-0700 G BBC HA WAf /ASC
9440 0100-0300 J NHK Radio Japan J ME /D-n
9460 1600-2100 TUR Voice of Turkey TU Eu e
9470 1800-1900 EGY Radio Cairo I Eu a
9480 1800-2000 CHN China Radio Int. F Eu x
9490 1730-1745 CAN Bible Voice A ME /BUL-s
9490 1745-1750 Mo,We CAN Bible Voice A ME /BUL-s
9490 1200-1300 ROU Radio Romania Int. RO CEu s
9500 0300-0700 ALG Ifrikya FM A CAf b
9500 0400-0500 ROU Radio Romania Int. RO WEu g
9500 1800-1900 ROU Radio Romania Int. RO WEu g
9500 1900-2000 ROU Radio Romania Int. RO WEu g
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
9540 0500-0600 TCD Radio Ndarason Int. KNU WAf /G-w
9540 1400-1500 TUR Voice of Turkey A ME e
9560 1900-1930 CHN China Radio Int. HU Eu u
9570 1800-1900 ROU Radio Romania DIGITAL D CEu t
9575 1900-2000 CHN China Radio Int. CA Eu b
9575 2000-2030 ROU Radio Romania Int. F WEu g
9585 1645-1715 Fr CAN Bible Voice E ME /BUL-s
9585 1645-1800 Sa CAN Bible Voice E ME /BUL-s
9585 1700-1730 Mo CAN Bible Voice E ME /BUL-s
9585 1700-1815 Su CAN Bible Voice E ME /BUL-s
9585 2030-2100 CHN China Radio Int. HU Eu ka
9585 1830-1900 Su USA Follow the Bible Min. A ME /CVA
9600 1800-1900 CHN China Radio Int. E Eu b
9600 2000-2100 CHN China Radio Int. E Eu ka
9600 2100-2200 CHN China Radio Int. E Eu ka
9605 1600-1700 CHN China Radio Int. R EEu b
9605 1700-1800 CHN China Radio Int. R EEu s
9620 1730-1930 IND AIR Akashvani Ext.Sce A ME b
9620 1820-1835 irr IND AIR Akashvani Ext.Sce E ME b
9620 1930-2030 IND AIR Akashvani Ext.Sce F Eu b
9620 2000-2015 irr IND AIR Akashvani Ext.Sce E Eu b
9635 1815-1830 Su CAN Bible Voice E ME /D-n
9635 0800-1800 MLI Radio Mali BM WAf k
9640 2100-2300 CHN China Radio Int. S SEu ka
9645 1830-2030 CHN China Radio Int. F WAf k
9650 0600-0630 ROU Radio Romania Int. D CEu t
9655 1900-2000 CHN China Radio Int. TU ME k
9655 2000-2100 KOR KBS World Radio F WAf /ASC
9670 0000-2400 D Channel 292 D,E Eu r
9670 0900-1000 Su D Radio DARC D Eu r
9685 1730-1830 CHN China Radio Int. M Eu u
9695 1730-1830 CHN China Radio Int. M ME k
9700 2200-0700 ALG Ifrikya FM A WAf o
9700 0600-0630 ROU Radio Romania Int. D CEu t
9705 2000-2030 CVA Radio Vaticana E CAf
9705 2030-2100 CVA Radio Vaticana F CAf
9710 0440-0500 CVA Radio Vaticana UK EEu
9710 0500-0520 CVA Radio Vaticana R EEu
9710 0605-0700 Su CVA Radio Vaticana UK EEu
9710 0710-0820 Su CVA Radio Vaticana RO EEu
9710 1640-1700 CVA Radio Vaticana UK EEu
9710 1700-1720 CVA Radio Vaticana BY EEu
9715 1320-1420 IRN IRIB Voice of I.R.Iran KU ME s
9730 1600-1700 CHN China Radio Int. R EEu s
9730 1900-2000 CHN China Radio Int. P SEu ka
9740 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
9740 1600-1700 KOR KBS World Radio K ME k
9740 1700-1800 KOR KBS World Radio S Eu k
9740 0400-0500 ROU Radio Romania Int. RO WEu g
9740 2030-2100 ROU Radio Romania Int. E WEu g
9740 2200-2300 ROU Radio Romania Int. E WEu g
9745 1930-2030 CHN China Radio Int. EO Eu ka
9750 1830-1930 TUR Voice of Turkey E Eu e
9765 1800-1900 CHN China Radio Int. R EEu s
9770 0400-0600 TUR Voice of Turkey TU Eu e
9790 2000-2100 F Radio France Int. F WAf i
9790 2100-2200 F Radio France Int. F WAf i
9790 1320-1420 IRN IRIB Voice of I.R.Iran KU ME s
9790 1700-1730 TWN Radio Taiwan Int. R EEu /BUL-s
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
9840 1430-1730 IRN IRIB Voice of I.R.Iran A ME s
9840 1730-1830 TUR Voice of Turkey D CEu e
9845 1900-2000 MDG MWV New Life Station R EEu m
9850 2000-2115 EGY Radio Cairo F WEu a
9865 2000-2100 CHN China Radio Int. M ME k
9865 2300-2400 CHN China Radio Int. M Eu u
9870 1500-1600 EGY Radio Cairo AL Eu a
9870 1650-1820 IRN IRIB Voice of I.R.Iran TU ME s
9870 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
9875 1800-1900 KRE Voice of Korea F ME u
9875 1900-2000 KRE Voice of Korea E ME u
9875 2000-2050 KRE Voice of Korea KCBS K ME u
9880 1930-2030 TUR Voice of Turkey F WAf e
9885 1800-1900 MDG MWV New Life Station R EEu m
9890 1900-2000 EGY Radio Cairo R EEu a
9890 2115-2215 EGY Radio Cairo E WEu a
9890 1500-1600 KRE Voice of Korea A ME u
9890 1600-1700 KRE Voice of Korea E ME u
9890 1700-1800 KRE Voice of Korea A ME u
9890 0430-0500 ROU Radio Romania Int. R EEu t
9900 1700-1900 EGY Radio Cairo TU ME a
11600 1545-1600 CAN Bible Voice A ME /BUL-s
11600 1600-1615 Fr CAN Bible Voice A ME /BUL-s
11600 0400-0500 USA Brother Stair E Eu /BUL-s
11600 1600-1700 USA Brother Stair E Eu /BUL-s
11610 2100-2200 MDG MWV The Light of Life M WEu m
11610 1900-2000 Su USA Follow the Bible Min. F Af /G-w
11615 2000-2100 Tu,Th D Music 4 Joy DIGITAL WAf n
11635 1800-1900 KRE Voice of Korea F ME u
11635 1900-2000 KRE Voice of Korea E ME u
11635 2000-2050 KRE Voice of Korea KCBS K ME u
11640 0430-0500 HOL Radio Dabanga SUD SDN /MDG
11640 0400-0430 Tu-Fr HOL Radio Tamazuj SUD SSD /CVA
11645 1500-1600 KRE Voice of Korea A ME u
11645 1600-1700 KRE Voice of Korea E ME u
11645 1700-1800 KRE Voice of Korea A ME u
11650 1700-1800 CHN China Radio Int. EO Eu x
11650 1800-2000 CHN China Radio Int. D WEu u
11650 0530-0600 ROU Radio Romania Int. E WEu t
11660 1730-1830 CHN China Radio Int. M Eu s
11660 2030-2230 CHN China Radio Int. F SEu ka
11660 1930-2000 Sa-Th G BBC HA WAf /ASC
11660 1930-2030 Fr G BBC HA WAf /ASC
11660 1900-1930 Su USA Follow the Bible Min. E WAf /ASC
11690 0000-1800 1.Sa FIN Scandinavian Weekend R. FI Eu v
11690 2100-2400 1.Fr FIN Scandinavian Weekend R. FI Eu v
11695 1800-2000 CHN China Radio Int. F CAf ka
11700 0500-0600 F Radio France Int. F CAf i
11700 0600-0700 F Radio France Int. F WAf i
11700 1200-1230 ROU Radio Romania Int. A ME g
11700 2030-2100 USA Adventist World Radio NIG WAf /D-n
11710 1830-1930 Tu,Th D Music 4 Joy DIGITAL ME n
11710 1320-1420 IRN IRIB Voice of I.R.Iran KU ME s
11710 1650-1820 IRN IRIB Voice of I.R.Iran TU ME s
11720 1800-2100 1.Sa FIN Scandinavian Weekend R. FI Eu v
11720 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
11725 1600-1800 CHN China Radio Int. D Eu x
11730 1400-1500 ROU Radio Romania Int. D CEu t
11740 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
11740 0500-0530 ROU Radio Romania Int. F WEu g
11750 1900-2000 CHN China Radio Int. P SEu j
11750 1800-1900 ROU Radio Romania Int. D CEu t
11750 0900-1000 TUR Voice of Turkey A ME e
11760 2200-2300 CHN China Radio Int. P Eu x
11770 2000-2100 CHN China Radio Int. E Eu x
11770 2100-2200 CHN China Radio Int. E Eu x
11790 1500-1600 CHN China Radio Int. R Eu u
11790 0600-0630 F Radio France Int. HA WAf i
11790 2000-2100 F Radio France Int. F WAf i
11790 2100-2200 F Radio France Int. F WAf i
11790 0700-0800 Su ROU Radio Romania Int. RO ME g
11805 1900-2000 USA Adventist World Radio A ME /GUM-a
11810 2200-2300 KOR KBS World Radio E Eu k
11810 1500-1530 ROU Radio Romania Int. R EEu t
11815 0440-0500 CVA Radio Vaticana UK EEu
11815 0500-0520 CVA Radio Vaticana R EEu
11815 1640-1700 CVA Radio Vaticana UK EEu
11825 1700-1800 CHN China Radio Int. HR SEu b
11825 2100-2200 CHN China Radio Int. HR SEu b
11825 0400-0500 MDG MWV African Pathways R. E CAf m
11830 1500-1530 Su-Th G BBC A ME /OMA-a
11830 1600-1700 ROU Radio Romania Int. F WEu g
11850 1500-1530 ROU Radio Romania Int. R EEu t
11850 1730-1800 Fr-Su TWN Radio Taiwan Int. F Eu s
11855 1800-1830 Su-Tu CAN Bible Voice FS ME /D-n
11855 2200-2400 CHN China Radio Int. S SEu u
11870 0600-0700 CHN China Radio Int. E ME ka
11870 1840-1900 CVA Radio Vaticana Ros WAf
11870 2000-2030 CVA Radio Vaticana E WAf
11870 2030-2100 CVA Radio Vaticana F WAf
11870 2100-2130 CVA Radio Vaticana P WAf
11870 0400-0500 irr F TDF DIGITAL F Af i
11875 1600-1700 CHN China Radio Int. R EEu u
11875 1700-1800 CHN China Radio Int. R EEu u
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
11900 0500-0530 ROU Radio Romania Int. F WEu g
11940 1600-1700 CHN China Radio Int. E Eu ka
11950 1820-1920 IRN IRIB Voice of I.R.Iran HA WAf s
11960 0300-0400 J NHK Radio Japan J ME /D-n
11960 0530-0600 ROU Radio Romania Int. E WEu g
11965 1600-1700 CHN China Radio Int. E Eu ka
11965 2000-2100 MDG MWV African Pathways R. E CAf m
11965 1300-1400 TUR Voice of Turkey R EEu e
11975 1700-1800 ROU Radio Romania Int. RO WEu g
11975 1800-1900 ROU Radio Romania Int. RO WEu g
11975 1900-2000 ROU Radio Romania Int. RO WEu g
11975 2000-2030 ROU Radio Romania Int. F WEu g
11975 2030-2100 ROU Radio Romania Int. E WEu g
12015 1700-1800 CHN China Radio Int. E Eu b
12015 1400-1600 KRE Voice of Korea R Eu u
12015 1600-1700 KRE Voice of Korea D Eu u
12015 1700-1800 KRE Voice of Korea R Eu u
12015 1800-1900 KRE Voice of Korea D Eu u
12015 1900-2000 KRE Voice of Korea D Eu u
12015 2000-2050 KRE Voice of Korea KCBS K Eu u
12035 0700-1300 Tu,Th USA Voice of America E EEu /D-L
12050 0000-2400 HOL SunDance Radio NL Eu n
12060 1700-1900 J NHK Radio Japan J ME y
12060 1900-2100 J NHK Radio Japan J CAf y
12060 2100-2120 J NHK Radio Japan F CAf y
12060 0600-1400 Tu,Fr USA Voice of America E Af /BOT
12095 0629-0700 G BBC HA WAf /ASC
12095 0700-0729 G BBC F WAf /ASC
13575 1200-1300 CHN China Radio Int. R EEu u
13580 0500-0530 ROU Radio Romania Int. F Af t
13600 1610-1630 J NHK Radio Japan A ME y
13600 1630-1650 J NHK Radio Japan FS ME y
13610 0700-0800 KOR KBS World Radio K Eu /G-w
13630 1500-1600 CHN China Radio Int. E ME u
13635 0600-1300 TUR Voice of Turkey TU Eu e
13640 1900-0300 ALG Ifrikya FM A CAf b
13640 0100-0200 CHN China Radio Int. E Eu ka
13640 1500-1600 CHN China Radio Int. E Eu ka
13655 0830-0900 TUR Voice of Turkey I SEu e
13660 1830-2030 CHN China Radio Int. F WAf ka
13670 1300-1400 CHN China Radio Int. E Eu ka
13670 1700-1800 CHN China Radio Int. EO Eu b
13670 2000-2100 CHN China Radio Int. M Eu b
13670 2100-2200 CHN China Radio Int. HR SEu b
13670 1800-1900 MDG MWV African Pathways R. E CAf m
13670 1900-2000 MDG MWV Radio Feda A ME m
13690 2000-2100 CHN China Radio Int. M Eu s
13690 2100-2300 CHN China Radio Int. S SEu s
13690 1600-1700 Su ROU Radio Romania DIGITAL HB WEu s
13690 1600-1700 Mo-Sa ROU Radio Romania DIGITAL RO WEu s
13695 0500-0600 F Radio France Int. F CAf i
13695 0600-0700 F Radio France Int. F WAf i
13695 0700-0800 F Radio France Int. F WAf i
13700 1800-1900 CHN China Radio Int. AM SEu u
13710 1400-1500 CHN China Radio Int. E Eu ka
13710 1500-1600 CHN China Radio Int. TU ME k
13710 1600-1700 CHN China Radio Int. TU ME k
13710 1730-1830 CHN China Radio Int. M ME k
13710 1900-2000 CHN China Radio Int. TU ME k
13710 2000-2100 MDG MWV Radio Feda A ME m
13710 0700-1300 Tu,Th USA Voice of America E ME /D-L
13720 2000-2030 F Radio France Int. HA CAf i
13725 1630-1730 TUR Voice of Turkey S SEu e
13730 0500-0515 Fr CAN Bible Voice A ME /D-n
13740 0600-0630 F Radio France Int. HA WAf i
13750 2030-2230 CHN China Radio Int. F SEu u
13750 0400-0500 J NHK Radio Japan J ME /D-n
13750 1700-1800 ROU Radio Romania DIGITAL E WEu t
13755 1500-1600 CHN China Radio Int. M Eu ka
13760 1600-1700 CHN China Radio Int. E Eu ka
13760 1700-1800 CHN China Radio Int. E Eu ka
13760 1800-1900 CHN China Radio Int. E Eu ka
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
13790 1800-1830 G BBC F CAf /MDG
13810 1800-2000 CHN China Radio Int. D WEu ka
13830 1700-1730 CVA Radio Vaticana F CAf
13830 1840-1900 Su CVA Radio Vaticana Ros Af
13855 1900-0100 ALG Ifrikya FM A WAf o
13855 2145-2155 ALG Ifrikya FM E WAf o
13860 1500-1600 CHN China Radio Int. R EEu s
15120 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15130 0530-0630 IND AIR Akashvani Ext.Sce A ME b
15130 0610-0625 irr IND AIR Akashvani Ext.Sce E ME b
15130 1100-1200 ROU Radio Romania Int. E WEu g
15130 1200-1230 ROU Radio Romania Int. A ME t
15140 0700-1900 ALG Ifrikya FM A WAf o
15145 0600-0700 CHN China Radio Int. E ME ka
15145 0400-0500 irr F TDF DIGITAL F Af i
15145 1700-1730 Fr-Su TWN Radio Taiwan Int. F Eu s
15150 0930-1130 IRN IRIB Voice of I.R.Iran A ME s
15150 1150-1220 IRN IRIB Voice of I.R.Iran HB ME s
15150 0900-1000 Su ROU Radio Romania Int. RO WEu g
15150 1000-1100 ROU Radio Romania Int. F WEu g
15150 1200-1700 Su-Fr USA WMLK Bethel, PA E Eu
15160 0900-1000 KOR KBS World Radio K ME k
15160 1530-1600 ROU Radio Romania Int. A ME t
15170 0800-0900 Su ROU Radio Romania Int. RO ME t
15170 1300-1500 ROU Radio Romania Int. RO WEu g
15180 1100-1200 CHN China Radio Int. BU Eu ka
15180 1200-1300 CHN China Radio Int. SR Eu ka
15180 1700-1800 ROU Radio Romania Int. E WEu t
15190 1730-2030 PHL Radyo Pilipinas TAG ME t
15200 0630-0700 ROU Radio Romania Int. A ME t
15200 1700-1800 ROU Radio Romania Int. RO WEu g
15220 1000-1100 CHN China Radio Int. HU Eu ka
15220 1100-1200 CHN China Radio Int. CZ WEu ka
15235 1430-1730 IRN IRIB Voice of I.R.Iran A ME s
15240 0420-0550 IRN IRIB Voice of I.R.Iran TU ME s
15240 0600-0830 IRN IRIB Voice of I.R.Iran A ME s
15240 0930-1130 IRN IRIB Voice of I.R.Iran A ME s
15240 1130-1430 IRN IRIB Voice of I.R.Iran A ME s
15240 1430-1730 IRN IRIB Voice of I.R.Iran A ME s
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
15250 1600-1700 CHN China Radio Int. E ME u
15250 0900-1000 Su ROU Radio Romania Int. RO WEu g
15250 1000-1100 ROU Radio Romania Int. F WEu g
15260 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15260 1700-1800 S IBRA Radio Sama A ME /G-w
15265 1800-1900 KOR KBS World Radio R EEu /G-w
15280 1500-1530 Su-Th G BBC A ME /MDG
15300 0500-0600 F Radio France Int. F CAf i
15300 0600-0700 F Radio France Int. F CAf i
15300 0700-0800 F Radio France Int. F WAf i
15300 0800-0900 F Radio France Int. F WAf i
15300 0900-1000 F Radio France Int. F WAf i
15300 1800-1900 F Radio France Int. F WAf i
15300 1900-2000 F Radio France Int. F WAf i
15320 1100-1200 ROU Radio Romania Int. E WEu g
15320 1300-1600 TUR Voice of Turkey TU Eu e
15325 0700-0730 F Radio France Int. HA WAf i
15330 0730-0800 F Radio France Int. FU WAf i
15335 0800-0900 CHN China Radio Int. R EEu ka
15335 0900-1000 CHN China Radio Int. R EEu ka
15335 1200-1300 CHN China Radio Int. R EEu s
15340 0420-0550 IRN IRIB Voice of I.R.Iran TU ME s
15340 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15340 1300-1500 ROU Radio Romania Int. RO WEu g
15350 1130-1230 TUR Voice of Turkey D Eu e
15360 1530-1600 ROU Radio Romania Int. A ME t
15365 0600-1300 TUR Voice of Turkey TU Eu e
15380 1130-1430 IRN IRIB Voice of I.R.Iran A ME s
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
15400 1800-1900 Mo-Fr G BBC E WAf /ASC
15400 1930-2000 Sa-Th G BBC HA WAf w
15400 1930-2030 Fr G BBC HA WAf w
15410 1400-1500 CHN China Radio Int. M Eu ka
15420 0700-0730 F Radio France Int. MAN WAf i
15420 1800-1900 TCD Radio Ndarason Int. KNU WAf /G-w
15430 0550-0650 IRN IRIB Voice of I.R.Iran HA WAf s
15430 0600-0830 IRN IRIB Voice of I.R.Iran A ME s
15430 0830-1030 IRN IRIB Voice of I.R.Iran A ME s
15430 1020-1150 IRN IRIB Voice of I.R.Iran HA WAf s
15430 1150-1220 IRN IRIB Voice of I.R.Iran HB ME s
15440 1900-1930 USA Adventist World Radio HA CAf /D-n
15440 1930-2000 USA Adventist World Radio IG WAf /D-n
15440 2000-2030 USA Adventist World Radio YO WAf /D-n
15445 0400-0500 CHN China Radio Int. R EEu ka
15445 0500-0600 CHN China Radio Int. R EEu ka
15460 0900-1000 irr F TDF DIGITAL F WAf i
15490 0500-0600 G BBC E CAf w
15490 0700-0730 G BBC F CAf /ASC
15490 1800-1830 G BBC F WAf /ASC
15505 0900-0930 irr F TDF DIGITAL F Af i
15505 0600-0700 TCD Radio Ndarason Int. KNU WAf /G-w
15510 0500-0530 ROU Radio Romania Int. F Af t
15520 1400-2200 SaSu E Radio Exterior España S ME n
15520 1500-1800 Mo-Fr E Radio Exterior España S ME n
15520 1800-2000 Mo-Fr E Radio Exterior España S ME n
15520 2000-2030 Tu-Th E Radio Exterior España S ME n
15520 2000-2030 Mo E Radio Exterior España SEF ME n
15520 2000-2100 Fr E Radio Exterior España A ME n
15520 2030-2100 Mo E Radio Exterior España M ME n
15520 2030-2100 Tu-Th E Radio Exterior España S ME n
15520 2100-2200 Mo-Fr E Radio Exterior España S ME n
15520 2200-2230 Sa E Radio Exterior España R ME n
15520 2200-2230 157 E Radio Exterior España S ME n
15520 2200-2300 We E Radio Exterior España E ME n
15520 2200-2300 Tu E Radio Exterior España F ME n
15520 2200-2300 Th E Radio Exterior España P ME n
15520 2230-2300 Fr-Mo E Radio Exterior España S ME n
15520 0800-0900 Su ROU Radio Romania Int. RO ME t
15550 1700-1800 HOL Radio Dabanga SUD SDN /CVA
15550 1020-1150 IRN IRIB Voice of I.R.Iran HA WAf s
15560 1020-1150 IRN IRIB Voice of I.R.Iran HA WAf s
15565 1700-1730 CVA Radio Vaticana F CAf
15590 1200-1300 CHN China Radio Int. E Eu u
15590 1300-1400 CHN China Radio Int. E Eu u
15590 1400-1500 CHN China Radio Int. E Eu u
15595 0520-0600 Su CVA Radio Vaticana L ME
15595 0600-0610 Mo-Sa CVA Radio Vaticana I ME
15595 0610-0630 Mo-Sa CVA Radio Vaticana A ME
15595 0630-0645 Sa CVA Radio Vaticana E ME
15595 0630-0645 Mo-Fr CVA Radio Vaticana F ME
15595 0830-0950 Su CVA Radio Vaticana LTO EEu
15595 1130-1200 Fr CVA Radio Vaticana E ME
15595 1530-1600 CVA Radio Vaticana A ME
15595 1600-1615 CVA Radio Vaticana F ME
15595 1615-1630 CVA Radio Vaticana E ME
15595 1840-1900 Su CVA Radio Vaticana Ros ME
15610 0600-1400 Tu,Fr USA Voice of America E Af /BOT
15640 0200-0330 PHL Radyo Pilipinas E ME t
15665 0400-0500 CHN China Radio Int. R EEu u
15665 0500-0600 CHN China Radio Int. R EEu u
15665 0800-0900 CHN China Radio Int. R EEu u
15665 0900-1000 CHN China Radio Int. R EEu u
15680 0700-0800 Su ROU Radio Romania Int. RO ME t
15690 0700-1100 Tu,Th USA Voice of America E EEu /D-L
15710 0630-0700 ROU Radio Romania Int. A ME t
15720 0830-1000 TUR Voice of Turkey FS ME e
15785 0000-2400 D funklust DIGITAL D CEu e
17490 0700-0900 CHN China Radio Int. E Eu ka
17490 0900-1000 CHN China Radio Int. E Eu ka
17490 1000-1100 CHN China Radio Int. E Eu ka
17490 1100-1300 CHN China Radio Int. E Eu ka
17520 0600-0700 CHN China Radio Int. I SEu ka
17525 0700-1000 irr CVA Radio Vaticana F WAf
17525 1500-1800 irr CVA Radio Vaticana F WAf
17525 1730-2230 Su-Fr USA WMLK Bethel, PA E Eu
17540 0700-1000 irr CVA Radio Vaticana E CAf
17540 1500-1800 irr CVA Radio Vaticana E CAf
17560 1200-1400 CHN China Radio Int. F SEu ka
17570 0900-1000 CHN China Radio Int. E Eu u
17570 1000-1100 CHN China Radio Int. HU Eu ka
17570 1100-1200 CHN China Radio Int. CZ WEu ka
17600 0700-0100 ALG Ifrikya FM A CAf b
17600 1115-1130 ALG Ifrikya FM SWA CAf b
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
17630 0700-0800 Su ROU Radio Romania Int. RO ME t
17640 0100-0200 CHN China Radio Int. E Eu ka
17640 1200-1230 G BBC F WAf /ASC
17640 1400-1600 Sa G BBC E WAf /ASC
17640 1530-1730 Su G BBC E WAf /ASC
17650 0600-0700 CHN China Radio Int. M Eu ka
17650 0700-0800 CHN China Radio Int. M Eu ka
17650 0800-0900 CHN China Radio Int. M Eu ka
17650 0900-1000 CHN China Radio Int. E Eu ka
17650 1000-1100 CHN China Radio Int. M Eu ka
17650 1100-1200 CHN China Radio Int. M Eu ka
17650 1200-1300 CHN China Radio Int. M Eu ka
17650 1300-1400 CHN China Radio Int. F SEu ka
17660 0800-0900 F Radio France Int. F WAf i
17660 0900-1000 F Radio France Int. F WAf i
17660 1300-1330 F Radio France Int. FU WAf i
17680 0600-0700 CHN China Radio Int. S SEu ka
17680 0700-0800 CHN China Radio Int. S SEu ka
17690 0600-1400 Tu,Fr USA Voice of America E Af /BOT
17710 0700-1000 irr CVA Radio Vaticana A ME
17720 0500-0700 CHN China Radio Int. D WEu ka
17730 1700-1730 F Radio France Int. MAN WAf i
17730 1730-1800 F Radio France Int. FU WAf i
17735 1300-1400 CHN China Radio Int. M Eu ka
17735 1400-1500 CHN China Radio Int. M Eu ka
17735 1500-1600 CHN China Radio Int. M Eu ka
17740 1000-1100 TUR Voice of Turkey F SEu e
17750 0200-0330 PHL Radyo Pilipinas E ME t
17765 1600-1800 CHN China Radio Int. F SEu ka
17780 1700-1730 Mo-Fr G BBC E WAf /ASC
17780 1730-1800 Mo-Fr G BBC E WAf /ASC
17790 1130-1200 Fr CVA Radio Vaticana E ME
17790 1530-1600 CVA Radio Vaticana A ME
17790 0700-0800 Su ROU Radio Romania Int. RO ME g
17800 2200-2350 J NHK Radio Japan J ME y
17815 1200-1300 F Radio France Int. F WAf i
17830 1900-2000 Su TWN Radio Taiwan Int. F WAf /F-i
17830 1700-1730 Mo-Fr G BBC E CAf /ASC
17830 1730-1900 Mo-Fr G BBC E CAf /ASC
17850 0600-0700 F Radio France Int. F CAf i
17850 0700-0800 F Radio France Int. F CAf i
17850 0800-0900 F Radio France Int. F CAf i
17850 0900-1000 F Radio France Int. F CAf i
17850 1200-1300 F Radio France Int. F WAf i
17850 1800-1900 F Radio France Int. F CAf i
17850 1900-2000 F Radio France Int. F CAf i
17865 0600-0700 CHN China Radio Int. F SEu ka
17865 0700-0800 CHN China Radio Int. F SEu ka
17880 0700-1300 Tu,Th USA Voice of America E EEu /D-L
21470 1400-1430 Mo-Fr G BBC HA WAf /UAE
21470 1400-1600 Sa G BBC E CAf /UAE
21470 1530-1730 Su G BBC E CAf /CVA
21500 0500-0520 J NHK Radio Japan F WAf y
21500 0700-0900 J NHK Radio Japan J WAf y
21520 1200-1230 G BBC F CAf /ASC
21550 1200-1300 F Radio France Int. F CAf i
21580 0700-0800 F Radio France Int. F CAf i
21580 0800-0900 F Radio France Int. F CAf i
21580 0900-1000 F Radio France Int. F CAf i
21580 1700-1800 F Radio France Int. F CAf i
21580 1900-2000 F Radio France Int. F CAf i
21630 1400-1430 Mo-Fr G BBC HA WAf /ASC
21680 0900-1000 F Radio France Int. F CAf i
21680 1200-1300 F Radio France Int. F CAf i
21680 1700-1800 F Radio France Int. F CAf i
21680 1800-1900 F Radio France Int. F CAf i
21720 0200-0330 PHL Radyo Pilipinas E ME t
25800 0000-2400 DNK World Music Radio E Eu a`;

var PAGE_SIZE = 40;

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
        pageIndex = 0; // erste 20 Treffer
    } else if (p.x < 2.0 / 3.0) {
        pageIndex = 1; // zweite 20 Treffer
    } else {
        pageIndex = 2; // dritte 20 Treffer
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
        title = "Maldekstre: trafoj 1-40";
    } else if (pageIndex === 1) {
        title = "Centre: trafoj 41-80";
    } else {
        title = "Dekstre: trafoj 81-120";
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
        "Aktualaj radio-elsendoj por\n" +
        "Europo, Afriko au sud-okcidenta Azio.\n" +       
        "Tushi en la malsupra duono ...\n" +
        "maldekstre: trafoj 1-40\n" +
        "centre: trafoj 41-80\n" +
        "dekstre: trafoj 81-120\n" +
        "Ekstrakto el eibispace punkto de";
}