/**
 #
 # Copyright 2017 KiKe. All Rights Reserved.
 #
 # Licensed under the Apache License, Version 2.0 (the "License");
 # you may not use this file except in compliance with the License.
 # You may obtain a copy of the License at
 #
 #      http://www.apache.org/licenses/LICENSE-2.0
 #
 # Unless required by applicable law or agreed to in writing, software
 # distributed under the License is distributed on an "AS IS" BASIS,
 # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 # See the License for the specific language governing permissions and
 # limitations under the License.
 */

"use strict";

const wiki = require('../wiki-parser');

const should = require("should");

describe("Wikipedia Parser", function () {

    it("Get infoBox from wiki as json", function (done) {

        this.timeout(5000);
        wiki.infoBox("https://en.wikipedia.org/wiki/Methane", function (err, res) {
            should.not.exist(err);
            should.exist(res);
            let data = '{"CasNumber": "74-82-8  Y", "3DModel(": "Interactive image", "3Dmet": "B01450", "BeilsteinReference": "1718732", "Chebi": "CHEBI:16183  Y", "Chemspider": "291  Y", "EchaInfocard": "100.000.739", "EcNumber": "200-812-7", "GmelinReference": "59", "Kegg": "C01438  N", "Mesh": "Methane", "Pubchem": "297", "RtecsNumber": "PA1490000", "UnNumber": "1971", "ChemicalFormula": "C H 4", "MolarMass": "16.04gmol -1", "Appearance": "Colorless gas", "Odor": "Odorless", "Density": "0.656  g/L (gas, 25  C, 1  atm) 0.716  g/L (gas, 0  C, 1  atm) 0.42262  g/cm 3  (liquid, -162  C) ", "MeltingPoint": "-182.5C; -296.4F; 90.7K", "BoilingPoint": "-161.49C; -258.68F; 111.66K", "SolubilityInWater": "22.7 mg/L", "Solubility": "Soluble in  ethanol ,  diethyl ether ,  benzene ,  toluene ,  methanol ,  acetone", "Log": "1.09", "Henry\'SLaw": "14 nmolPa -1 kg -1", "MagneticSusceptibility": "-12.2  10 -6  cm 3 /mol", "PointGroup": "T d", "MolecularShape": "Tetrahedron", "DipoleMoment": "0 D", "Specific": "35.69 J/(Kmol)", "StdMolar": "186.25 J/(Kmol)", "StdEnthalpyOf": "-891.1 to -890.3 kJ/mol", "SafetyDataSheet": "See:  data page", "GhsPictograms": "", "GhsSignalWord": "DANGER", "GhsHazardStatements": "H220", "GhsPrecautionaryStatements": "P210", "Nfpa704": "4 2 0 SA", "FlashPoint": "-188C (-306.4F; 85.1K)", "Autoignition": "537C (999F; 810K)", "ExplosiveLimits": "4.417%", "RelatedAlkanes": "Methyl iodide Difluoromethane Iodoform Carbon tetrachloride", "StructureAnd": "Refractive index  ( n ), Dielectric constant  ( r ), etc.", "Thermodynamic": "Phase behaviour  solidliquidgas", "SpectralData": "UV ,  IR ,  NMR ,  MS"}\n';
            should.equal(res, data);
            done();
        });
    });

    it("Get getParagraph from wiki as json", function (done) {

        this.timeout(5000);
        wiki.getParagraph("https://en.wikipedia.org/wiki/Methane", function (err, res) {
            should.not.exist(err);
            should.exist(res);
            let data = '{"data": "Methane (US: /men/ or UK: /mien/) is a chemical compound with the chemical formula CH4 (one atom of carbon and four atoms of hydrogen). It is a group-14 hydride and the simplest alkane, and is the main constituent of natural gas. The relative abundance of methane on Earth makes it an attractive fuel, though capturing and storing it poses challenges due to its gaseous state under normal conditions for temperature and pressure.Natural methane is found both below ground and under the sea floor. When it reaches the surface and the atmosphere, it is known as atmospheric methane. The Earth\'s atmospheric methane concentration has increased by about 150% since 1750, and it accounts for 20% of the total radiative forcing from all of the long-lived and globally mixed greenhouse gases.[dubious  discuss]"}\n';
            should.equal(res, data);
            done();
        });
    });

    it("Get getMainImage from wiki as json", function (done) {

        this.timeout(5000);
        wiki.getMainImage("https://en.wikipedia.org/wiki/Methane", function (err, res) {
            should.not.exist(err);
            let data = '{"fileName": "170px-Methane-2D-dimensions.svg.png", "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Methane-2D-dimensions.svg/170px-Methane-2D-dimensions.svg.png"}\n';
            should.exist(res);
            should.equal(res, data);
            done();
        });
    });

    it("Exist infoBox error ", function (done) {

        this.timeout(5000);
        wiki.infoBox("", function (err, res) {
            should.exist(err);
            should.not.exist(res);
            done();
        });
    });

    it("Exist getParagraph error", function (done) {

        this.timeout(5000);
        wiki.getParagraph("", function (err, res) {
            should.exist(err);
            should.not.exist(res);
            done();
        });
    });

    it("Exist getMainImage error", function (done) {

        this.timeout(5000);
        wiki.getMainImage("", function (err, res) {
            should.exist(err);
            should.not.exist(res);
            done();
        });
    });
});