<?xml version="1.0" encoding="UTF-8"?><xsl:stylesheet version="1.0" exclude-result-prefixes="java" extension-element-prefixes="my-ext" xmlns:lxslt="http://xml.apache.org/xslt" xmlns:java="http://xml.apache.org/xslt/java" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:my-ext="ext1">
<xsl:import href="HTML-CCFR.xsl"/>
<xsl:output indent="no" method="xml" omit-xml-declaration="yes"/>
<xsl:template match="/">
<xsl:apply-templates select="*"/>
<xsl:apply-templates select="/output/root[position()=last()]" mode="last"/>
<br/>
</xsl:template>
<lxslt:component prefix="my-ext" functions="formatJson retrievePrizeTable">
<lxslt:script lang="javascript">
					
					var debugFeed = [];
					var debugFlag = false;
					// Format instant win JSON results.
					// @param jsonContext String JSON results to parse and display.
					// @param translation Set of Translations for the game.
					function formatJson(jsonContext, prizeNames, prizeValues, translations)
					{
						var scenario = getScenario(jsonContext);
						var winningNums = getWinningNumbers(scenario);
						var outcomeNums = getOutcomeData(scenario, 0);
						var outcomePrizes = getOutcomeData(scenario, 1);
						var convertedPrizeValues = (prizeValues.substring(1)).split('|');
						//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
						// Print Translation Table to !DEBUG
						var index = 1;
						registerDebugText("Translation Table");
						while(index &lt; translations.item(0).getChildNodes().getLength())
						{
							var childNode = translations.item(0).getChildNodes().item(index);
							registerDebugText(childNode.getAttribute("key") + ": " +  childNode.getAttribute("value"));
							index += 2;
						}
						
						var instantWin = getTranslationByName("none", translations);
						var symbolPotData = getPots(scenario);
						var turnDataArray = getTurnInfo(scenario);
						for(var i = 0; i &lt; turnDataArray.length; i++){
							symbolPotData = addToPotData(symbolPotData,turnDataArray[i]);
							//If no instant win has already been found, continue searching.
							if(instantWin === getTranslationByName("none", translations)){
								instantWin = getPotentialIW(turnDataArray[i], translations);
							}
						}
						
						// Output winning numbers table.
						var r = [];
						r.push('&lt;table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed;overflow-x:scroll"&gt;');
						r.push('&lt;tr class="tablehead"&gt;');
						r.push('&lt;td&gt;');
						r.push(getTranslationByName("attachedPrize", translations));
						r.push('&lt;/td&gt;');
						r.push('&lt;td&gt;');
						r.push(getTranslationByName("count", translations));
						r.push('&lt;/td&gt;');
						r.push('&lt;/tr&gt;');
						r.push('&lt;tr class="tablehead"&gt;');
						for(var i = 0; i &lt; symbolPotData.length; i++){
							r.push('&lt;tr&gt;');
							r.push('&lt;td class="tablebody"&gt;');
							var prizeIndex = getPrizeNameIndex('A,B,C,D,E,F', symbolPotData[i].letter);
							r.push(convertedPrizeValues[prizeIndex]);
							
							r.push('&lt;/td&gt;');
							r.push('&lt;td class="tablebody"&gt;');
							r.push(symbolPotData[i].count);
							r.push('&lt;/td&gt;');
							r.push('&lt;/tr&gt;');
						}
						r.push('&lt;/tr&gt;');
						r.push('&lt;/table&gt;');
						
						r.push('&lt;table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed;overflow-x:scroll"&gt;');
						r.push('&lt;tr class="tablehead"&gt;');
						r.push('&lt;td&gt;');
						r.push(getTranslationByName("instantWin", translations));
						r.push('&lt;/td&gt;');
						r.push('&lt;/tr&gt;');
						r.push('&lt;tr class="tablebody"&gt;');
						r.push('&lt;td&gt;');
						r.push(instantWin);
						r.push('&lt;/td&gt;');
						r.push('&lt;/tr&gt;');
						r.push('&lt;/table&gt;');
						
						////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						// !DEBUG OUTPUT TABLE
						if(debugFlag)
						{
							// DEBUG TABLE
							//////////////////////////////////////
							r.push('&lt;table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed"&gt;');
							for(var idx = 0; idx &lt; debugFeed.length; ++idx)
							{
								if(debugFeed[idx] == "")
									continue;
								r.push('&lt;tr&gt;');
								r.push('&lt;td class="tablebody"&gt;');
								r.push(debugFeed[idx]);
								r.push('&lt;/td&gt;');
								r.push('&lt;/tr&gt;');
							}
							r.push('&lt;/table&gt;');
							
						}
						
						return r.join('');
					}
					
					// Input: A list of Price Points and the available Prize Structures for the game as well as the wagered price point
					// Output: A string of the specific prize structure for the wagered price point
					function retrievePrizeTable(pricePoints, prizeStructures, wageredPricePoint)
					{
						var pricePointList = pricePoints.split(",");
						var prizeStructStrings = prizeStructures.split("|");
						
						
						for(var i = 0; i &lt; pricePoints.length; ++i)
						{
							if(wageredPricePoint == pricePointList[i])
							{
								return prizeStructStrings[i];
							}
						}
						
						return "";
					}

					// Input: Json document string containing 'scenario' at root level.
					// Output: Scenario value.
					function getScenario(jsonContext)
					{
						// Parse json and retrieve scenario string.
						var jsObj = JSON.parse(jsonContext);
						var scenario = jsObj.scenario;

						// Trim null from scenario string.
						scenario = scenario.replace(/\0/g, '');

						return scenario;
					}
					
					// Input: Json document string containing 'amount' at root level.
					// Output: Price Point value.
					function getPricePoint(jsonContext)
					{
						// Parse json and retrieve price point amount
						var jsObj = JSON.parse(jsonContext);
						var pricePoint = jsObj.amount;

						return pricePoint;
					}

					// Input: "23,9,31|8:E,35:E,4:D,13:D,37:G,..."
					// Output: ["23", "9", "31"]
					function getWinningNumbers(scenario)
					{
						var numsData = scenario.split("|")[0];
						return numsData.split(",");
					}

					// Input: "23,9,31|8:E,35:E,4:D,13:D,37:G,..."
					// Output: ["8", "35", "4", "13", ...] or ["E", "E", "D", "G", ...]
					function getOutcomeData(scenario, index)
					{
						var outcomeData = scenario.split("|")[1];
						var outcomePairs = outcomeData.split(",");
						var result = [];
						for(var i = 0; i &lt; outcomePairs.length; ++i)
						{
							result.push(outcomePairs[i].split(":")[index]);
						}
						return result;
					}

					// Input: 'X', 'E', or number (e.g. '23')
					// Output: translated text or number.
					function translateOutcomeNumber(outcomeNum)
					{
						if(outcomeNum == 'I')
						{
							return getTranslationByName("instantWin", translations);
						}
						else if(outcomeNum == 'X')
						{
							return getTranslationByName("instantDoubler", translations);
						}
						else
						{
							return outcomeNum;
						}
					}
					
					// Input: List of winning numbers and the number to check
					// Output: true is number is contained within winning numbers or false if not
					function checkMatch(winningNums, boardNum)
					{
						for(var i = 0; i &lt; winningNums.length; ++i)
						{
							if(winningNums[i] == boardNum)
							{
								return true;
							}
						}
						
						return false;
					}
					
					// Input: "A,B,C,D,..." and "A"
					// Output: index number
					function getPrizeNameIndex(prizeNames, currPrize)
					{
						var prizes = prizeNames.split(",");
						
						for(var i = 0; i &lt; prizes.length; ++i)
						{
							if(prizes[i] == currPrize)
							{
								return i;
							}
						}
					}
					
					function getPots(scenario){
						//Get only the words along with their prize tiers
						var wordData = scenario.split("|")[0];
						//Now get them split up individually
						var individualPots = wordData.split(",");
						var symbolPotData = new Array(individualPots.length);
						for(var i = 0; i&lt;individualPots.length; i++){
							var singlePrize = {
								letter : individualPots[i].toString(),
								count : 0
							};
							symbolPotData[i] = singlePrize;
						}
						return symbolPotData;
					}
					
					function addToPotData(symbolPotData, letter){
						for(var i = 0; i &lt; symbolPotData.length; i++){
							if(symbolPotData[i].letter.toString() === letter.toString()){
								symbolPotData[i].count = symbolPotData[i].count + 1;
								break;
							}
						}
						return symbolPotData;
					}
					
					function getPotentialIW(letter, translations){
						if(letter){	
							//registerDebugText(letter);
							var iwStr = letter.split(":");
							if(iwStr.length &gt; 1){
								var iwNumber = parseInt(iwStr[1].charAt(0).toString());
								
								if(iwStr[1].charAt(0).toString() === "1"){
									return getTranslationByName("instantWin1", translations);
								} else if(iwStr[1].charAt(0).toString() === "2"){
									return getTranslationByName("instantWin2", translations);
								} else if(iwStr[1].charAt(0).toString() === "3") {
									return getTranslationByName("instantWin3", translations);
								}
								
							}
						}
						return getTranslationByName("none", translations);
					}
					
					function getTurnInfo(scenario){
						var turnData = scenario.split("|")[1];
						var turnDataArray = turnData.split(",");
						return turnDataArray;
					}
					
					////////////////////////////////////////////////////////////////////////////////////////
					function registerDebugText(debugText)
					{
						debugFeed.push(debugText);
					}
					/////////////////////////////////////////////////////////////////////////////////////////
					function getTranslationByName(keyName, translationNodeSet)
					{
						var index = 1;
						while(index &lt; translationNodeSet.item(0).getChildNodes().getLength())
						{
							var childNode = translationNodeSet.item(0).getChildNodes().item(index);
							
							if(childNode.getAttribute("key") == keyName)
							{
								return childNode.getAttribute("value");
							}
							
							index += 2;
						}
					}
					
				</lxslt:script>
</lxslt:component>
<xsl:template match="root" mode="last">
<table border="0" cellpadding="1" cellspacing="1" width="100%" class="gameDetailsTable">
<tr>
<td valign="top" class="subheader">
<xsl:value-of select="//translation/phrase[@key='totalWager']/@value"/>
<xsl:value-of select="': '"/>
<xsl:call-template name="Utils.ApplyConversionByLocale">
<xsl:with-param name="multi" select="/output/denom/percredit"/>
<xsl:with-param name="value" select="//ResultData/WagerOutcome[@name='Game.Total']/@amount"/>
<xsl:with-param name="code" select="/output/denom/currencycode"/>
<xsl:with-param name="locale" select="//translation/@language"/>
</xsl:call-template>
</td>
</tr>
<tr>
<td valign="top" class="subheader">
<xsl:value-of select="//translation/phrase[@key='totalWins']/@value"/>
<xsl:value-of select="': '"/>
<xsl:call-template name="Utils.ApplyConversionByLocale">
<xsl:with-param name="multi" select="/output/denom/percredit"/>
<xsl:with-param name="value" select="SignedData/Data/Outcome/OutcomeDetail/Payout"/>
<xsl:with-param name="code" select="/output/denom/currencycode"/>
<xsl:with-param name="locale" select="//translation/@language"/>
</xsl:call-template>
</td>
</tr>
</table>
</xsl:template>
<xsl:template match="//Outcome">
<xsl:if test="OutcomeDetail/Stage = 'Wager'">
<xsl:call-template name="Wager.Detail"/>
</xsl:if>
<xsl:if test="OutcomeDetail/NextStage = 'Wager'">
<xsl:call-template name="LastEvaluation.Detail"/>
</xsl:if>
</xsl:template>
<xsl:template name="Wager.Detail">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="gameDetailsTable">
<tr>
<td class="tablebold" background="">
<xsl:value-of select="//translation/phrase[@key='transactionId']/@value"/>
<xsl:value-of select="': '"/>
<xsl:value-of select="OutcomeDetail/RngTxnId"/>
</td>
</tr>
</table>
</xsl:template>
<xsl:template name="LastEvaluation.Detail">
<xsl:variable name="odeResponseJson" select="string(//ResultData/JSONOutcome[@name='ODEResponse']/text())"/>
<xsl:variable name="translations" select="lxslt:nodeset(//translation/)"/>
<xsl:variable name="wageredPricePoint" select="string(//ResultData/WagerOutcome[@name='Game.Total']/@amount)"/>
<xsl:variable name="prizeNames">A,B,C,D,E,F,1,2,3</xsl:variable>
<xsl:variable name="pricePoints">100,200,300,500,1000</xsl:variable>
<xsl:variable name="prizeValuesAllPricePoints">750000,25000,5000,1400,400,100,2000,800,200|2000000,50000,6500,2500,800,200,3500,1500,400|4500000,100000,10000,3500,1200,300,5000,2000,600|7500000,250000,20000,7500,2000,500,10000,3500,1000|15000000,500000,100000,15000,5000,1000,21000,7500,2000</xsl:variable>
<xsl:variable name="prizeTable">
<xsl:value-of select="my-ext:retrievePrizeTable($pricePoints, $prizeValuesAllPricePoints, $wageredPricePoint)"/>
</xsl:variable>
<xsl:variable name="convertedPrizeValues">
<xsl:call-template name="split">
<xsl:with-param name="pText" select="string($prizeTable)"/>
</xsl:call-template>
</xsl:variable>
<xsl:value-of select="my-ext:formatJson($odeResponseJson, $prizeNames, string($convertedPrizeValues), $translations)" disable-output-escaping="yes"/>
</xsl:template>
<xsl:template name="split">
<xsl:param name="pText"/>
<xsl:if test="string-length($pText)">
<xsl:text>|</xsl:text>
<xsl:call-template name="Utils.ApplyConversionByLocale">
<xsl:with-param name="multi" select="/output/denom/percredit"/>
<xsl:with-param name="value" select="substring-before(concat($pText,','),',')"/>
<xsl:with-param name="code" select="/output/denom/currencycode"/>
<xsl:with-param name="locale" select="//translation/@language"/>
</xsl:call-template>
<xsl:call-template name="split">
<xsl:with-param name="pText" select="substring-after($pText,',')"/>
</xsl:call-template>
</xsl:if>
</xsl:template>
<xsl:template match="text()"/>
</xsl:stylesheet>
