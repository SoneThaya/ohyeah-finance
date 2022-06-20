export const mockTeslaGetChartData = {
  chart: {
    result: [
      {
        meta: {
          currency: "USD",
          symbol: "TSLA",
          exchangeName: "NMS",
          instrumentType: "EQUITY",
          firstTradeDate: 1277818200,
          regularMarketTime: 1655496004,
          gmtoffset: -14400,
          timezone: "EDT",
          exchangeTimezoneName: "America/New_York",
          regularMarketPrice: 650.28,
          chartPreviousClose: 74.28,
          priceHint: 2,
          currentTradingPeriod: {
            pre: {
              timezone: "EDT",
              end: 1655472600,
              start: 1655452800,
              gmtoffset: -14400,
            },
            regular: {
              timezone: "EDT",
              end: 1655496000,
              start: 1655472600,
              gmtoffset: -14400,
            },
            post: {
              timezone: "EDT",
              end: 1655510400,
              start: 1655496000,
              gmtoffset: -14400,
            },
          },
          dataGranularity: "1mo",
          range: "5y",
          validRanges: [
            "1d",
            "5d",
            "1mo",
            "3mo",
            "6mo",
            "1y",
            "2y",
            "5y",
            "10y",
            "ytd",
            "max",
          ],
        },
        timestamp: [
          1498881600, 1501560000, 1504238400, 1506830400, 1509508800,
          1512104400, 1514782800, 1517461200, 1519880400, 1522555200,
          1525147200, 1527825600, 1530417600, 1533096000, 1535774400,
          1538366400, 1541044800, 1543640400, 1546318800, 1548997200,
          1551416400, 1554091200, 1556683200, 1559361600, 1561953600,
          1564632000, 1567310400, 1569902400, 1572580800, 1575176400,
          1577854800, 1580533200, 1583038800, 1585713600, 1588305600,
          1590984000, 1593576000, 1596254400, 1598932800, 1601524800,
          1604203200, 1606798800, 1609477200, 1612155600, 1614574800,
          1617249600, 1619841600, 1622520000, 1625112000, 1627790400,
          1630468800, 1633060800, 1635739200, 1638334800, 1641013200,
          1643691600, 1646110800, 1648785600, 1651377600, 1654056000,
          1655496004,
        ],
        events: {
          splits: {
            1596254400: {
              date: 1598880600,
              numerator: 5,
              denominator: 1,
              splitRatio: "5:1",
            },
          },
        },
        indicators: {
          quote: [
            {
              volume: [
                908200000, 684708000, 557563500, 615183500, 744064000,
                549423500, 621357500, 545950000, 786342500, 951554000,
                777890500, 1067125500, 861641000, 1386801000, 980377000,
                1431803500, 665095500, 732256000, 878260500, 642750500,
                1068967500, 1153736500, 1412994000, 1074853000, 996683500,
                668953000, 678876500, 1139913000, 788854000, 1035400000,
                2036092500, 2362934000, 2104675000, 1907387500, 1363518000,
                1278863500, 1893167500, 1557378400, 1736284800, 833666400,
                782598800, 1196346000, 705694800, 522857900, 942452400,
                678539700, 625175800, 519921900, 448449800, 381324900,
                390171300, 528934600, 649111500, 510055900, 638668800,
                463708900, 576424300, 506986600, 649407200, 409909400, 30880590,
              ],
              high: [
                74.2699966430664, 74.0, 77.9219970703125, 72.5999984741211,
                66.52200317382812, 69.48799896240234, 72.0999984741211,
                71.99800109863281, 69.73400115966797, 61.900001525878906,
                62.597999572753906, 74.74600219726562, 72.95600128173828,
                77.49199676513672, 62.992000579833984, 69.43199920654297,
                73.3499984741211, 75.89800262451172, 70.4000015258789,
                64.8479995727539, 61.42599868774414, 59.23400115966797,
                51.66999816894531, 46.948001861572266, 53.2140007019043,
                48.902000427246094, 50.70000076293945, 68.16799926757812,
                72.23999786376953, 87.06199645996094, 130.60000610351562,
                193.79800415039062, 161.39599609375, 173.96400451660156,
                168.6580047607422, 217.53799438476562, 358.99798583984375,
                500.1400146484375, 502.489990234375, 465.8999938964844,
                607.7999877929688, 718.719970703125, 900.4000244140625, 880.5,
                721.1099853515625, 780.7899780273438, 706.0, 697.6199951171875,
                700.0, 740.3900146484375, 799.0, 1115.2099609375,
                1243.489990234375, 1172.8399658203125, 1208.0, 947.77001953125,
                1114.77001953125, 1152.8699951171875, 955.5, 792.6300048828125,
                662.908203125,
              ],
              close: [
                64.69400024414062, 71.18000030517578, 68.22000122070312,
                66.30599975585938, 61.77000045776367, 62.27000045776367,
                70.86199951171875, 68.61199951171875, 53.22600173950195,
                58.779998779296875, 56.94599914550781, 68.58999633789062,
                59.62799835205078, 60.332000732421875, 52.95399856567383,
                67.46399688720703, 70.09600067138672, 66.55999755859375,
                61.40399932861328, 63.97600173950195, 55.97200012207031,
                47.737998962402344, 37.03200149536133, 44.69200134277344,
                48.321998596191406, 45.12200164794922, 48.17399978637695,
                62.98400115966797, 65.98799896240234, 83.66600036621094,
                130.11399841308594, 133.59800720214844, 104.80000305175781,
                156.37600708007812, 167.0, 215.96200561523438,
                286.1520080566406, 498.32000732421875, 429.010009765625,
                388.0400085449219, 567.5999755859375, 705.6699829101562,
                793.530029296875, 675.5, 667.9299926757812, 709.4400024414062,
                625.219970703125, 679.7000122070312, 687.2000122070312,
                735.719970703125, 775.47998046875, 1114.0, 1144.760009765625,
                1056.780029296875, 936.719970703125, 870.4299926757812,
                1077.5999755859375, 870.760009765625, 758.260009765625,
                650.280029296875, 650.280029296875,
              ],
              open: [
                74.0479965209961, 64.5999984741211, 71.2239990234375,
                68.50399780273438, 66.44999694824219, 61.0880012512207,
                62.400001525878906, 70.19999694824219, 69.00199890136719,
                51.25199890136719, 58.70199966430664, 57.172000885009766,
                72.01399993896484, 59.597999572753906, 59.38800048828125,
                61.15399932861328, 67.6520004272461, 72.0, 61.220001220703125,
                61.08399963378906, 61.38800048828125, 56.52399826049805,
                47.77000045776367, 37.10200119018555, 46.04199981689453,
                48.529998779296875, 44.816001892089844, 48.29999923706055,
                63.263999938964844, 65.87999725341797, 84.9000015258789,
                134.73800659179688, 142.2519989013672, 100.80000305175781,
                151.0, 171.60000610351562, 216.60000610351562,
                289.8399963378906, 502.1400146484375, 440.760009765625, 394.0,
                597.5900268554688, 719.4600219726562, 814.2899780273438,
                690.1099853515625, 688.3699951171875, 703.7999877929688,
                627.7999877929688, 683.9199829101562, 700.0, 734.0800170898438,
                778.4000244140625, 1145.0, 1160.699951171875, 1147.75,
                935.2100219726562, 869.6799926757812, 1081.1500244140625,
                860.77001953125, 755.1599731445312, 640.2999877929688,
              ],
              low: [
                60.625999450683594, 62.24399948120117, 67.08000183105469,
                63.332000732421875, 58.5260009765625, 60.0, 61.13600158691406,
                58.95199966430664, 49.641998291015625, 48.917999267578125,
                54.683998107910156, 56.768001556396484, 57.22600173950195,
                57.63999938964844, 50.45000076293945, 49.55400085449219, 65.0,
                58.81800079345703, 55.85599899291992, 57.75400161743164,
                50.891998291015625, 46.22600173950195, 36.81999969482422,
                35.39799880981445, 44.444000244140625, 42.20000076293945,
                43.672000885009766, 44.85599899291992, 61.85200119018555,
                65.44999694824219, 84.34200286865234, 122.30400085449219,
                70.10199737548828, 89.27999877929688, 136.60800170898438,
                170.82000732421875, 216.10000610351562, 273.0,
                329.8800048828125, 379.1099853515625, 392.29998779296875,
                541.2100219726562, 717.1900024414062, 619.0, 539.489990234375,
                659.4199829101562, 546.97998046875, 571.219970703125,
                620.4600219726562, 648.8400268554688, 708.8499755859375,
                763.5900268554688, 978.5999755859375, 886.1199951171875,
                792.010009765625, 700.0, 756.0399780273438, 821.7000122070312,
                620.5700073242188, 626.0800170898438, 639.5999755859375,
              ],
            },
          ],
          adjclose: [
            {
              adjclose: [
                64.69400024414062, 71.18000030517578, 68.22000122070312,
                66.30599975585938, 61.77000045776367, 62.27000045776367,
                70.86199951171875, 68.61199951171875, 53.22600173950195,
                58.779998779296875, 56.94599914550781, 68.58999633789062,
                59.62799835205078, 60.332000732421875, 52.95399856567383,
                67.46399688720703, 70.09600067138672, 66.55999755859375,
                61.40399932861328, 63.97600173950195, 55.97200012207031,
                47.737998962402344, 37.03200149536133, 44.69200134277344,
                48.321998596191406, 45.12200164794922, 48.17399978637695,
                62.98400115966797, 65.98799896240234, 83.66600036621094,
                130.11399841308594, 133.59800720214844, 104.80000305175781,
                156.37600708007812, 167.0, 215.96200561523438,
                286.1520080566406, 498.32000732421875, 429.010009765625,
                388.0400085449219, 567.5999755859375, 705.6699829101562,
                793.530029296875, 675.5, 667.9299926757812, 709.4400024414062,
                625.219970703125, 679.7000122070312, 687.2000122070312,
                735.719970703125, 775.47998046875, 1114.0, 1144.760009765625,
                1056.780029296875, 936.719970703125, 870.4299926757812,
                1077.5999755859375, 870.760009765625, 758.260009765625,
                650.280029296875, 650.280029296875,
              ],
            },
          ],
        },
      },
    ],
    error: null,
  },
};
