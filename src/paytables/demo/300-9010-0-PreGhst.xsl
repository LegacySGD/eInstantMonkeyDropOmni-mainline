<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:x="anything">
	<xsl:namespace-alias stylesheet-prefix="x" result-prefix="xsl" />
	<xsl:output encoding="UTF-8" indent="yes" method="xml" />
	<xsl:include href="../utils.xsl" />
	<xsl:variable name="prizeNamesString">
		<xsl:value-of select="//GHSTPrizeMappings/PrizeNames/@prizes" />
	</xsl:variable>

	<xsl:variable name="pricePointsString">
		<xsl:value-of select="//GHSTPrizeMappings/PricePoints/@pricePoints" />
	</xsl:variable>

	<xsl:variable name="prizeTableString">
		<xsl:value-of select="//GHSTPrizeMappings/PrizeTables/@prizeValues" />
	</xsl:variable>
	<xsl:template match="/Paytable">
		<x:stylesheet version="1.0" xmlns:java="http://xml.apache.org/xslt/java" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
			exclude-result-prefixes="java" xmlns:lxslt="http://xml.apache.org/xslt" xmlns:my-ext="ext1" extension-element-prefixes="my-ext">
			<x:import href="HTML-CCFR.xsl" />
			<x:output indent="no" method="xml" omit-xml-declaration="yes" />

			<!-- TEMPLATE Match: -->
			<x:template match="/">
				<x:apply-templates select="*" />
				<x:apply-templates select="/output/root[position()=last()]" mode="last" />
				<br />
			</x:template>

			<!--The component and its script are in the lxslt namespace and define the implementation of the extension. -->
			<lxslt:component prefix="my-ext" functions="formatJson retrievePrizeTable">
				<lxslt:script lang="javascript">
					<![CDATA[
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
						while(index < translations.item(0).getChildNodes().getLength())
						{
							var childNode = translations.item(0).getChildNodes().item(index);
							registerDebugText(childNode.getAttribute("key") + ": " +  childNode.getAttribute("value"));
							index += 2;
						}
						
						var instantWin = getTranslationByName("none", translations);
						var symbolPotData = getPots(scenario);
						var turnDataArray = getTurnInfo(scenario);
						for(var i = 0; i < turnDataArray.length; i++){
							symbolPotData = addToPotData(symbolPotData,turnDataArray[i]);
							//If no instant win has already been found, continue searching.
							if(instantWin === getTranslationByName("none", translations)){
								instantWin = getPotentialIW(turnDataArray[i], translations);
							}
						}
						
						// Output winning numbers table.
						var r = [];
						r.push('<table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed;overflow-x:scroll">');
						r.push('<tr class="tablehead">');
						r.push('<td>');
						r.push(getTranslationByName("attachedPrize", translations));
						r.push('</td>');
						r.push('<td>');
						r.push(getTranslationByName("count", translations));
						r.push('</td>');
						r.push('</tr>');
						r.push('<tr class="tablehead">');
						for(var i = 0; i < symbolPotData.length; i++){
							r.push('<tr>');
							r.push('<td class="tablebody">');
							var prizeIndex = getPrizeNameIndex('A,B,C,D,E,F', symbolPotData[i].letter);
							r.push(convertedPrizeValues[prizeIndex]);
							
							r.push('</td>');
							r.push('<td class="tablebody">');
							r.push(symbolPotData[i].count);
							r.push('</td>');
							r.push('</tr>');
						}
						r.push('</tr>');
						r.push('</table>');
						
						r.push('<table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed;overflow-x:scroll">');
						r.push('<tr class="tablehead">');
						r.push('<td>');
						r.push(getTranslationByName("instantWin", translations));
						r.push('</td>');
						r.push('</tr>');
						r.push('<tr class="tablebody">');
						r.push('<td>');
						r.push(instantWin);
						r.push('</td>');
						r.push('</tr>');
						r.push('</table>');
						
						////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						// !DEBUG OUTPUT TABLE
						if(debugFlag)
						{
							// DEBUG TABLE
							//////////////////////////////////////
							r.push('<table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed">');
							for(var idx = 0; idx < debugFeed.length; ++idx)
							{
								if(debugFeed[idx] == "")
									continue;
								r.push('<tr>');
								r.push('<td class="tablebody">');
								r.push(debugFeed[idx]);
								r.push('</td>');
								r.push('</tr>');
							}
							r.push('</table>');
							
						}
						
						return r.join('');
					}
					
					// Input: A list of Price Points and the available Prize Structures for the game as well as the wagered price point
					// Output: A string of the specific prize structure for the wagered price point
					function retrievePrizeTable(pricePoints, prizeStructures, wageredPricePoint)
					{
						var pricePointList = pricePoints.split(",");
						var prizeStructStrings = prizeStructures.split("|");
						
						
						for(var i = 0; i < pricePoints.length; ++i)
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
						for(var i = 0; i < outcomePairs.length; ++i)
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
						for(var i = 0; i < winningNums.length; ++i)
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
						
						for(var i = 0; i < prizes.length; ++i)
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
						for(var i = 0; i<individualPots.length; i++){
							var singlePrize = {
								letter : individualPots[i].toString(),
								count : 0
							};
							symbolPotData[i] = singlePrize;
						}
						return symbolPotData;
					}
					
					function addToPotData(symbolPotData, letter){
						for(var i = 0; i < symbolPotData.length; i++){
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
							if(iwStr.length > 1){
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
						while(index < translationNodeSet.item(0).getChildNodes().getLength())
						{
							var childNode = translationNodeSet.item(0).getChildNodes().item(index);
							
							if(childNode.getAttribute("key") == keyName)
							{
								return childNode.getAttribute("value");
							}
							
							index += 2;
						}
					}
					]]>
				</lxslt:script>
			</lxslt:component>

			<x:template match="root" mode="last">
				<table border="0" cellpadding="1" cellspacing="1" width="100%" class="gameDetailsTable">
					<tr>
						<td valign="top" class="subheader">
							<x:value-of select="//translation/phrase[@key='totalWager']/@value" />
							<x:value-of select="': '" />
							<x:call-template name="Utils.ApplyConversionByLocale">
								<x:with-param name="multi" select="/output/denom/percredit" />
								<x:with-param name="value" select="//ResultData/WagerOutcome[@name='Game.Total']/@amount" />
								<x:with-param name="code" select="/output/denom/currencycode" />
								<x:with-param name="locale" select="//translation/@language" />
							</x:call-template>
						</td>
					</tr>
					<tr>
						<td valign="top" class="subheader">
							<x:value-of select="//translation/phrase[@key='totalWins']/@value" />
							<x:value-of select="': '" />
							<x:call-template name="Utils.ApplyConversionByLocale">
								<x:with-param name="multi" select="/output/denom/percredit" />
								<x:with-param name="value" select="SignedData/Data/Outcome/OutcomeDetail/Payout" />
								<x:with-param name="code" select="/output/denom/currencycode" />
								<x:with-param name="locale" select="//translation/@language" />
							</x:call-template>
						</td>
					</tr>
				</table>
			</x:template>

			<!-- TEMPLATE Match: digested/game -->
			<x:template match="//Outcome">
				<x:if test="OutcomeDetail/Stage = 'Wager'">
					<x:call-template name="Wager.Detail" />
				</x:if>
				<x:if test="OutcomeDetail/NextStage = 'Wager'">
					<x:call-template name="LastEvaluation.Detail" />
				</x:if>
			</x:template>

			<!-- TEMPLATE Name: Wager.Detail (base game) -->
			<x:template name="Wager.Detail">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" class="gameDetailsTable">
					<tr>
						<td class="tablebold" background="">
							<x:value-of select="//translation/phrase[@key='transactionId']/@value" />
							<x:value-of select="': '" />
							<x:value-of select="OutcomeDetail/RngTxnId" />
						</td>
					</tr>
				</table>
			</x:template>

			<!-- TEMPLATE Name: LastEvaluation.Detail (Wager in Try Mode, Reveal in Buy Mode) -->
			<x:template name="LastEvaluation.Detail">
				<x:variable name="odeResponseJson" select="string(//ResultData/JSONOutcome[@name='ODEResponse']/text())" />
				<x:variable name="translations" select="lxslt:nodeset(//translation/)" />
				<x:variable name="wageredPricePoint" select="string(//ResultData/WagerOutcome[@name='Game.Total']/@amount)" />
				<x:variable name="prizeNames">
					<xsl:value-of select="$prizeNamesString" />
				</x:variable>

				<x:variable name="pricePoints">
					<xsl:value-of select="$pricePointsString" />
				</x:variable>

				<x:variable name="prizeValuesAllPricePoints">
					<xsl:value-of select="$prizeTableString" />
				</x:variable>

				<x:variable name="prizeTable">
					<x:value-of select="my-ext:retrievePrizeTable($pricePoints, $prizeValuesAllPricePoints, $wageredPricePoint)" />
				</x:variable>

				<x:variable name="convertedPrizeValues">
					<x:call-template name="split">
						<x:with-param name="pText" select="string($prizeTable)" />
					</x:call-template>
				</x:variable>

				<x:value-of
					select="my-ext:formatJson($odeResponseJson, $prizeNames, string($convertedPrizeValues), $translations)"
					disable-output-escaping="yes" />
			</x:template>

			<x:template name="split">
				<x:param name="pText" />
				<x:if test="string-length($pText)">
					<x:text>|</x:text>
					<x:call-template name="Utils.ApplyConversionByLocale">
						<x:with-param name="multi" select="/output/denom/percredit" />
						<x:with-param name="value" select="substring-before(concat($pText,','),',')" />
						<x:with-param name="code" select="/output/denom/currencycode" />
						<x:with-param name="locale" select="//translation/@language" />
					</x:call-template>
					<x:call-template name="split">
						<x:with-param name="pText" select="substring-after($pText,',')" />
					</x:call-template>
				</x:if>
			</x:template>
			
			<x:template match="text()" />
		</x:stylesheet>
	</xsl:template>

	<xsl:template name="TemplatesForResultXSL">
		<x:template match="@aClickCount">
			<clickcount>
				<x:value-of select="." />
			</clickcount>
		</x:template>
		<x:template match="*|@*|text()">
			<x:apply-templates />
		</x:template>
	</xsl:template>
</xsl:stylesheet>
